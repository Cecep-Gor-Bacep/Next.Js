import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const val = await prisma.dataMhs.findMany({
    take: 10,
  });
  console.log(val);
}

export default prisma;