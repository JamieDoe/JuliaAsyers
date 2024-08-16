"use server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Received email:", body);

  // Add client new letter subscription logic here

  return NextResponse.json({ status: "success", email: body.email });
}
