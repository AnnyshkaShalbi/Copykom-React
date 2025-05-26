import { NextResponse } from 'next/server';
import sql from '@/app/lib/db';

// GET - получение всех офисов
export async function GET() {
  try {
    const offices = await sql`
      SELECT id, title, address, opening_hours 
      FROM offices
      ORDER BY id
    `;
    return NextResponse.json(offices);
    
  } catch (error: unknown) {
    let errorMessage = 'Ошибка при получении данных';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

// DELETE - удаление офиса
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    
    // Проверка наличия ID
    if (id === undefined || id === null) {
      return NextResponse.json(
        { error: 'ID офиса не указан' },
        { status: 400 }
      );
    }

    // Проверка типа ID
    if (typeof id !== 'number' || isNaN(id) || id <= 0) {
      return NextResponse.json(
        { error: 'Некорректный ID офиса' },
        { status: 400 }
      );
    }

    // Проверка существования офиса
    const [existing] = await sql`SELECT id FROM offices WHERE id = ${id}`;
    if (!existing) {
      return NextResponse.json(
        { error: 'Офис не найден' },
        { status: 404 }
      );
    }

    // Удаление
    await sql`DELETE FROM offices WHERE id = ${id}`;
    
    return NextResponse.json(
      { success: true, message: `Офис с ID ${id} удален` },
      { status: 200 }
    );

  } catch (error: unknown) {
    let errorMessage = 'Ошибка при удалении офиса';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

// POST - добавление нового офиса
export async function POST(request: Request) {
  try {
    const { title, address, opening_hours } = await request.json();
    
    // Валидация
    if (!title || !address || !opening_hours) {
      return NextResponse.json(
        { error: 'Все поля обязательны для заполнения' },
        { status: 400 }
      );
    }

    const [newOffice] = await sql`
      INSERT INTO offices (title, address, opening_hours)
      VALUES (${title}, ${address}, ${opening_hours})
      RETURNING *
    `;

    return NextResponse.json(newOffice, { status: 201 });

  } catch (error: unknown) {
    let errorMessage = 'Ошибка при добавлении офиса';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

// PUT - обновление офиса
export async function PUT(request: Request) {
  try {
    const { id, title, address, opening_hours } = await request.json();
    
    // Валидация
    if (!id || !title || !address || !opening_hours) {
      return NextResponse.json(
        { error: 'Все поля обязательны для заполнения' },
        { status: 400 }
      );
    }

    const [updatedOffice] = await sql`
      UPDATE offices 
      SET 
        title = ${title},
        address = ${address},
        opening_hours = ${opening_hours}
      WHERE id = ${id}
      RETURNING *
    `;

    return NextResponse.json(updatedOffice, { status: 200 });

  } catch (error: unknown) {
    let errorMessage = 'Ошибка при редактировании офиса';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}