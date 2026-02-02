import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    return NextResponse.json({status: 200, message: "Success"});
}