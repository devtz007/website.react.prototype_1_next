import { NextRequest, NextResponse } from 'next/server';

let text = 'initial text'; // This would be in a DB in production

export async function POST(req: NextRequest) {
  const { text: newText } = await req.json();
  text = newText;

  return NextResponse.json({ message: 'Text updated' });
}

export async function GET() {
  return NextResponse.json({ text });
}
