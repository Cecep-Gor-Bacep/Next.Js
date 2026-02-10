import { PrismaClient } from "@prisma/client"


export async function getAllMahasiswa() {
  const prisma = new PrismaClient()

  const Mhs = await prisma.dataMhs.findMany()
  
  return Mhs;
}

export async function getStatus() {
  const prisma = new PrismaClient()

  const status = await prisma.statusMhs.findMany()
  
  return status;
}