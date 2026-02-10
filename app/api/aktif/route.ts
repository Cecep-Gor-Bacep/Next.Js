import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.dataMhs.findMany({
      include: {
        statusMhs: {
            select: {
                status: true,
                ket: true
            }
        } 
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data" + error },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    return NextResponse.json({ status: 200, message: "Success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Error" });
  }
}
