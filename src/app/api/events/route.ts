import { NextResponse } from "next/server";

export async function GET() {
  try {
    const sheetUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfh_UEP2eK5lSeAtuZ3v91hiICHqiJybnfK530sMl-vYVXyeH6p8q557Ke2Y3sJjnfahDgCOCkG4FW/pub?output=csv";

    const res = await fetch(sheetUrl);
    const text = await res.text();

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: "Empty response from Google Sheets" },
        { status: 500 }
      );
    }

    const rows = text.trim().split("\n").map((r) => r.split(","));
    const headers = rows.shift() || [];
    const data = rows
      .filter((r) => r.length > 1)
      .map((row) =>
        Object.fromEntries(headers.map((h, i) => [h.trim(), row[i]?.trim()]))
      );

    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching sheet:", err);
    return NextResponse.json(
      { error: "Failed to fetch or parse Google Sheet" },
      { status: 500 }
    );
  }
}
