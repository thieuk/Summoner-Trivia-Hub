import { NextResponse } from 'next/server';
import cards from "@/data/Cards.json";
import champions from "@/data/Champions.json";

export async function GET(req, res) {
  const path = req.nextUrl.pathname;

  if (path === "/api/runeterra") {
    return NextResponse.json({ cards });
  }
  else if (path === "/api/league") {
    return NextResponse.json({ champions });
  }
  else {
    return NextResponse.json({ data: "Not a Valid Link" });
  }
}