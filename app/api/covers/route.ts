import { NextResponse } from 'next/server';
import sql from '@/app/lib/db';

export async function GET() {
  try {
    const covers = await sql`
      SELECT 
        id,
        price,
        title,
        image_path,
        diplom_work,
        diplom_project,
        final_work,
        master_thesis
      FROM covers
      ORDER BY id
    `;
    return NextResponse.json(covers);
    
  } catch (error: unknown) {
    let errorMessage = 'Ошибка при получении данных обложек';
    
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

export async function POST(request: Request) {
  try {
    const { 
      price, 
      title, 
      image_path, 
      diplom_work, 
      diplom_project, 
      final_work, 
      master_thesis 
    } = await request.json();
    
    // Валидация
    if (!title || !image_path || price === undefined) {
      return NextResponse.json(
        { error: 'Обязательные поля: title, image_path, price' },
        { status: 400 }
      );
    }

    const [newCover] = await sql`
      INSERT INTO covers (
        price,
        title,
        image_path,
        diplom_work,
        diplom_project,
        final_work,
        master_thesis
      )
      VALUES (
        ${price},
        ${title},
        ${image_path},
        ${diplom_work || false},
        ${diplom_project || false},
        ${final_work || false},
        ${master_thesis || false}
      )
      RETURNING *
    `;

    return NextResponse.json(newCover, { status: 201 });

  } catch (error: unknown) {
    let errorMessage = 'Ошибка при добавлении обложки';
    
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

export async function PUT(request: Request) {
  try {
    const { 
      id,
      price, 
      title, 
      image_path, 
      diplom_work, 
      diplom_project, 
      final_work, 
      master_thesis 
    } = await request.json();
    
    // Валидация
    if (!id || !title || !image_path || price === undefined) {
      return NextResponse.json(
        { error: 'Обязательные поля: id, title, image_path, price' },
        { status: 400 }
      );
    }

    const [updatedCover] = await sql`
      UPDATE covers SET
        price = ${price},
        title = ${title},
        image_path = ${image_path},
        diplom_work = ${diplom_work || false},
        diplom_project = ${diplom_project || false},
        final_work = ${final_work || false},
        master_thesis = ${master_thesis || false}
      WHERE id = ${id}
      RETURNING *
    `;

    if (!updatedCover) {
      return NextResponse.json(
        { error: 'Обложка не найдена' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedCover);

  } catch (error: unknown) {
    let errorMessage = 'Ошибка при обновлении обложки';
    
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

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json(
        { error: 'ID обложки обязателен' },
        { status: 400 }
      );
    }

    const [deletedCover] = await sql`
      DELETE FROM covers
      WHERE id = ${id}
      RETURNING *
    `;

    if (!deletedCover) {
      return NextResponse.json(
        { error: 'Обложка не найдена' },
        { status: 404 }
      );
    }

    return NextResponse.json(deletedCover);

  } catch (error: unknown) {
    let errorMessage = 'Ошибка при удалении обложки';
    
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