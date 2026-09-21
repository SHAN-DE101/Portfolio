import { NextResponse } from "next/server";

export async function GET() {
  const startTime = Date.now();
  return NextResponse.json(
    {
      status: "HEALTHY",
      engineer: "Shantanu Dey",
      role: "Backend & Cloud Engineer",
      runtime: "Next.js Edge / Vercel Serverless",
      region: "bom1 (Mumbai, IN)",
      stack: ["Java 17", "Spring Boot", "Azure Cloud", "PostgreSQL", "MongoDB"],
      certifications: ["AZ-900: Microsoft Azure Fundamentals"],
      education: "M.Tech Information & Cyber Security (MAKAUT)",
      uptime: "99.99%",
      timestamp: new Date().toISOString(),
      latencyMs: Math.max(1, Date.now() - startTime),
    },
    {
      status: 200,
      headers: {
        "x-portfolio-server": "shantanu-edge-v1",
        "cache-control": "no-store, max-age=0",
      },
    }
  );
}
