import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const pdfFile = formData.get('pdfFile') as File | null;

    if (!pdfFile) {
      return NextResponse.json(
        { success: false, error: 'No PDF file provided' },
        { status: 400 }
      );
    }

    // Проверяем тип файла
    if (pdfFile.type !== 'application/pdf') {
      return NextResponse.json(
        { success: false, error: 'Invalid file type, only PDF allowed' },
        { status: 400 }
      );
    }

    const TG_TOKEN = process.env.TG_TOKEN;
    const TG_CHAT_ID = process.env.TG_CHAT_ID;

    if (!TG_TOKEN || !TG_CHAT_ID) {
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Конвертируем File в Buffer
    const fileBuffer = Buffer.from(await pdfFile.arrayBuffer());
    
    // Создаем FormData для отправки в Telegram
    const telegramFormData = new FormData();
    telegramFormData.append('chat_id', TG_CHAT_ID);
    telegramFormData.append('document', new Blob([fileBuffer]), 
      `${pdfFile.name}`);

    // Отправляем файл в Telegram
    const telegramUrl = `https://api.telegram.org/bot${TG_TOKEN}/sendDocument`;
    const response = await fetch(telegramUrl, {
      method: 'POST',
      body: telegramFormData,
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Telegram API Error:', responseData);
      throw new Error(responseData.description || 'Ошибка при отправке файла в Telegram');
    }

    return NextResponse.json({ 
      success: true,
      message: 'Файл успешно отправлен в Telegram',
      telegramResponse: responseData
    });

  } catch (error: unknown) {
    console.error('Error sending file to Telegram:', error);
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