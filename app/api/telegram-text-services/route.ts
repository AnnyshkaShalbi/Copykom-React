import { NextResponse } from 'next/server';

interface RequestBody {
  service: string;
  phone: string;
  fileName: string;
  pageCount: number;
  fileSize: string;
}

// Маппинг сервисов на названия
const SERVICE_NAMES: Record<string, string> = {
  projectdoc: 'Проектная документация',
  brochure: 'Брошюровка на пластиковую пластину',
  hardcover: 'Твёрдый переплёт дипломов',
  scanning: 'Сканирование документов',
  patterns: 'Печать лекал и выкроек',
  presentations: 'Печать презентаций',
  drawings: 'Печать чертежей',
  copydoc: 'Печать документов',
};

export async function POST(request: Request) {
  try {
    const requestBody: RequestBody = await request.json();
    const { service, phone, fileName, pageCount, fileSize } = requestBody;

    // Проверка обязательных полей
    if (!phone || !fileName) {
      return NextResponse.json(
        { success: false, error: 'Телефон и файл обязательны' },
        { status: 400 }
      );
    }

    // Получение переменных окружения
    const TG_TOKEN = process.env.TG_TOKEN;
    const TG_CHAT_ID = process.env.TG_CHAT_ID;

    if (!TG_TOKEN || !TG_CHAT_ID) {
      return NextResponse.json(
        { success: false, error: 'Ошибка конфигурации сервера' },
        { status: 500 }
      );
    }

    // Получаем название сервиса или используем переданное значение
    const serviceName = SERVICE_NAMES[service] || service;

    // Формирование сообщения
    const text = `
📌 <b>${serviceName}</b>

📞 <b>Телефон:</b> ${phone}
📄 <b>Файл:</b> ${fileName}
📏 <b>Размер:</b> ${fileSize}
📑 <b>Страниц:</b> ${pageCount}
    `;

    // Отправка в Telegram
    const telegramUrl = `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text: text,
        parse_mode: "HTML"
      }),
    };

    const response = await fetch(telegramUrl, requestOptions);
    const data = await response.json();

    if (!response.ok) {
      console.error('Telegram API Error:', data);
      throw new Error(data.description || 'Ошибка при отправке в Telegram');
    }

    return NextResponse.json({ 
      success: true,
      message: 'Заявка успешно отправлена в Telegram',
      orderId: Date.now().toString(),
    });

  } catch (error: unknown) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Внутренняя ошибка сервера';
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage
      },
      { status: 500 }
    );
  }
}