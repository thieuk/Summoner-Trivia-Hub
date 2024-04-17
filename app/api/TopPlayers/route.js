import { NextResponse } from 'next/server';
import players from "@/data/TopPlayers.json";

export async function GET() {
  return NextResponse.json({ players });
}