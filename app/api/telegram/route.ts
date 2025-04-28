// app/api/telegram/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Логирование входящего запроса
  console.log('--- NEW REQUEST ---');
  console.log('Request Headers:', Object.fromEntries(request.headers));

  try {
    // Парсинг тела запроса
    const requestBody = await request.json();
    console.log('Request Body:', requestBody);
    
    const { name, phone, email, comment } = requestBody;

    // Проверка обязательных полей
    if (!name || !phone) {
      console.error('Validation Error: Missing required fields');
      return NextResponse.json(
        { success: false, error: 'Имя и телефон обязательны' },
        { status: 400 }
      );
    }

    // Получение переменных окружения
    const TG_TOKEN = process.env.TG_TOKEN;
    const TG_CHAT_ID = process.env.TG_CHAT_ID;
    console.log('Env Variables:', { TG_TOKEN, TG_CHAT_ID });

    if (!TG_TOKEN || !TG_CHAT_ID) {
      console.error('Environment variables missing');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Формирование сообщения
    const text = `📌 Новый заказ:\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📧 Email: ${email || 'не указан'}\n💬 Комментарий: ${comment || 'нет'}`;
    console.log('Formatted message:', text);

    // Отправка в Telegram
    const telegramUrl = `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`;
    console.log('Telegram API URL:', telegramUrl);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text: text,
        parse_mode: "HTML"
      }),
    };
    console.log('Telegram Request Options:', requestOptions);

    const response = await fetch(telegramUrl, requestOptions);
    const data = await response.json();
    console.log('Telegram API Response:', data);

    if (!response.ok) {
      console.error('Telegram API Error:', data);
      throw new Error(data.description || 'Ошибка при отправке в Telegram');
    }

    console.log('--- SUCCESS ---');
    return NextResponse.json({ 
      success: true, 
      data: {
        telegramResponse: data,
        yourData: requestBody
      }
    });

  } catch (error: any) {
    console.error('!!! ERROR !!!', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}