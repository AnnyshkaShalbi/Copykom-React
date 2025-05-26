// app/api/admins/route.ts
import { NextResponse } from 'next/server';
import sql from '@/app/lib/db';

export async function GET() {
  try {
    const admins = await sql`SELECT id, role, name, login FROM admins`;
    return NextResponse.json(admins);
    
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