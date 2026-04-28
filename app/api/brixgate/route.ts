import { NextRequest, NextResponse } from "next/server";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.brixgate.com/api/v1";

/**
 * Catch-all proxy — forwards POST/GET to the Brixgate API from the server,
 * avoiding CORS issues when called from the browser.
 *
 * Usage: POST /api/brixgate?path=auth/applicants
 *        POST /api/brixgate?path=payments/initiate  (include Authorization header)
 */
export async function POST(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path");
  if (!path) {
    return NextResponse.json({ error: "Missing path" }, { status: 400 });
  }

  const body = await req.text();
  const authorization = req.headers.get("authorization") ?? undefined;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (authorization) headers["Authorization"] = authorization;

  try {
    const upstream = await fetch(`${API_BASE}/${path}`, {
      method: "POST",
      headers,
      body,
    });

    const data = await upstream.json();
    return NextResponse.json(data, { status: upstream.status });
  } catch (err) {
    console.error("[brixgate proxy] error:", err);
    return NextResponse.json({ error: "Upstream request failed" }, { status: 502 });
  }
}

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path");
  if (!path) {
    return NextResponse.json({ error: "Missing path" }, { status: 400 });
  }

  const authorization = req.headers.get("authorization") ?? undefined;
  const headers: Record<string, string> = {};
  if (authorization) headers["Authorization"] = authorization;

  try {
    const upstream = await fetch(`${API_BASE}/${path}`, { headers });
    const data = await upstream.json();
    return NextResponse.json(data, { status: upstream.status });
  } catch (err) {
    console.error("[brixgate proxy] error:", err);
    return NextResponse.json({ error: "Upstream request failed" }, { status: 502 });
  }
}
