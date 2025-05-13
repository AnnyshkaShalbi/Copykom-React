// app/api/telegram/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();
    const { 
      client,
      color,
      embossing,
      logo,
      price,
      pdfFile,
      coloredPages,
      options,
      readinessDate
    } = requestBody;

    // Проверка обязательных полей
    if (!client?.name || !client?.phone) {
      return NextResponse.json(
        { success: false, error: 'Имя и телефон обязательны' },
        { status: 400 }
      );
    }

    // Получение переменных окружения
    const TG_TOKEN = process.env.TG_TOKEN;
    const TG_CHAT_ID = process.env.TG_CHAT_ID;

    if (!TG_TOKEN || !TG_CHAT_ID) {
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Форматирование данных
    const totalPages = pdfFile?.pages || 0;
    const bwPages = totalPages - (coloredPages?.length || 0);
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '.');
    const formattedTime = currentDate.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    });

    // Формирование сообщения
    const text = `
📣🎓 Новый заказ 🎓📣
👤 Имя: ${client.name} 👤
📞 Телефон: ${client.phone} 📞
📬 Email: ${client.email || 'не указан'} 📬
📧 Комментарий: ${client.comment || 'нет'}

${color === 'Синяя' ? '📘 Синяя обложка 📘' : '📕 Красная обложка 📕'}
Заголовок обложки: ${embossing.text}
Заголовок логотипа: ${logo}

📃 Имя файла: ${pdfFile?.name} 📃
📃 Всего страниц: ${totalPages} 📃
📃 Количество страниц ч/б: ${bwPages} 📃
📃 Количество цветных страниц: ${coloredPages.length} 📃

${coloredPages.length > 0 
  ? `🌈 Цветные страницы: ${coloredPages.join(', ')} 🌈` 
  : '🌈 Цветные страницы не указаны! 🌈'}

${options.pocketForReview 
  ? '✅ Вклеить карман для рецензии ✅' 
  : '❌ Без кармана для рецензии ❌'}

${options.pocketCD 
  ? '✅ Вклеить карман для CD диска ✅' 
  : '❌ Без кармана для CD ❌'}

${options.plasticFile ? `
💿 Пластиковые файлы:
${options.plasticFileOptions.beforeTitle.enabled 
  ? `- Перед титулом: ${options.plasticFileOptions.beforeTitle.count}` 
  : ''}
${options.plasticFileOptions.afterTitle.enabled 
  ? `- После титула: ${options.plasticFileOptions.afterTitle.count}` 
  : ''}
${options.plasticFileOptions.atEnd.enabled 
  ? `- В конце: ${options.plasticFileOptions.atEnd.count}` 
  : ''}
` : '❌ Без пластиковых файлов ❌'}
🗓 Дата заполнения заявки: ${formattedDate} в ${formattedTime} 🗓
              ⌛️ ⌛️ ⌛️
🗓 Дата готовности: ${readinessDate.formattedDate} с ${readinessDate.formattedTime} 🗓

💰🧮 ЦЕНА: ${price} ₽ 🧮💰
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
      message: 'Заказ успешно отправлен в Telegram',
      orderId: Date.now().toString(),
    });

  } catch (error: unknown) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Internal server error';
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage
      },
      { status: 500 }
    );
  }
}