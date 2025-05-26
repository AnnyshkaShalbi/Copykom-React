// app/api/login/route.ts
import { NextResponse } from 'next/server';
import sql from '@/app/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  const { login, password } = await request.json();

  try {
    const [admin] = await sql`
      SELECT id, password_hash FROM admins 
      WHERE login = ${login}
    `;

    if (!admin || !(await bcrypt.compare(password, admin.password_hash))) {
      return NextResponse.json(
        { error: 'Неверный логин или пароль' },
        { status: 401 }
      );
    }

    return NextResponse.json({ success: true, adminId: admin.id });
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