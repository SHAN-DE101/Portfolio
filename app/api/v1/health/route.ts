import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "UP",
      service: "shantanu-dey-portfolio-edge",
      timestamp: new Date().toISOString(),
      environment: "production",
      nodeVersion: process.version,
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "X-Robots-Tag": "noindex",
      },
    }
  );
}
