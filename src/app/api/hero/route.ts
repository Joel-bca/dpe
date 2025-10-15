// /app/api/hero/route.ts
import { NextResponse } from "next/server";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfh_UEP2eK5lSeAtuZ3v91hiICHqiJybnfK530sMl-vYVXyeH6p8q557Ke2Y3sJjnfahDgCOCkG4FW/pub?output=csv";

export async function GET() {
  try {
    const response = await fetch(SHEET_URL, { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to fetch Google Sheet data");

    const text = await response.text();
    const rows = text.trim().split("\n").map((r) => r.split(","));
    const headers = rows.shift()?.map((h) => h.trim()) || [];

    const data = rows.map((row) =>
      Object.fromEntries(row.map((cell, i) => [headers[i], cell.trim()]))
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to load HeroContent" }, { status: 500 });
  }
}
