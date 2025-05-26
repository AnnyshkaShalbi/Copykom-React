import { NextResponse } from 'next/server';
import sql from '@/app/lib/db';

export async function GET() {
  try {
    const offices = await sql`SELECT id, title, address, opening_hours FROM offices`;
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