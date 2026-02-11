import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getAllMhs, updateStatKet } from "@/services/MahasiswaServices";

export async function GET() {
  try {
    const data = await getAllMhs();
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
    const body = await request.json();
    const {nim, status, ket} = body

    const data = await updateStatKet(nim, status, ket); 
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Error" + error });
  }
}
