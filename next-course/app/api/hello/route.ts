import { NextRequest, NextResponse } from "next/server";

export async function GET<NextResponse>(request: NextRequest) {
    const greeting = {message: "Hello from Next.js API"};

    return NextResponse.json(greeting, {status: 200})
}