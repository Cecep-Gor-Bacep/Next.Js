import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {
        return null;
    } catch (error) {
        return null;
    }
}

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        return NextResponse.json({status: 200, message: "Success"});
    } catch (error) {
        return NextResponse.json({status: 500, message: "Error"});
    }
}