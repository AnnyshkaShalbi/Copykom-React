import { db } from "@vercel/postgres";

const client = await db.connect();

async function listMetro() {
	const data = await client.sql`
    SELECT metro.title, metro.address
    FROM metro
    WHERE metro.title = "Метро Аэропорт;
  `;

	return data.rows;
}

export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });
  try {
  	return Response.json(await listMetro());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}
