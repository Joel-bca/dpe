import { NextResponse } from "next/server";

const BASE_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfh_UEP2eK5lSeAtuZ3v91hiICHqiJybnfK530sMl-vYVXyeH6p8q557Ke2Y3sJjnfahDgCOCkG4FW/pub?output=csv";

function parseCSV(csv: string) {
  const rows = csv.split("\n").map((r) => r.split(","));
  const headers = rows[0];
  return rows.slice(1).map((r) => {
    const obj: any = {};
    headers.forEach((h, i) => (obj[h.trim()] = r[i]));
    return obj;
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sheet = searchParams.get("sheet") || "Events"; // default Events list

  try {
    const res = await fetch(`${BASE_URL}&sheet=${sheet}`);
    const csv = await res.text();
    const data = parseCSV(csv);
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching:", err);
    return NextResponse.json({ error: "Failed to fetch sheet" }, { status: 500 });
  }
}
