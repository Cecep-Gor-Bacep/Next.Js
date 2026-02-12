import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getMhsDo, updateStatKet } from "@/services/DoServices";

export async function GET() {
  try {
    const data = await getMhsDo();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data" + error },
      { status: 500 },
    );
  }
}

export async function PUT(request: NextRequest) {
  const nimQuery = request.nextUrl.searchParams.get("nim");

  try {
    const body = await request.json();
    const { nim: nimBody, status, ket } = body;
    
    const nim = (nimQuery || nimBody) as string;
    const data = await updateStatKet(nim, status, ket);
    
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: "Error" + String(e) }, { status: 500 });
  }
}
