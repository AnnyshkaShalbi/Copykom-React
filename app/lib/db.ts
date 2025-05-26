// lib/db.ts
import postgres from 'postgres';

// Проверяем, что код выполняется на сервере
if (typeof window !== 'undefined') {
  throw new Error('Database client should only be used on the server');
}

const sql = postgres(process.env.DATABASE_URL!, {
  ssl: 'require',
  transform: {
    undefined: null, // Преобразует undefined в NULL в SQL
  },
});

export default sql;