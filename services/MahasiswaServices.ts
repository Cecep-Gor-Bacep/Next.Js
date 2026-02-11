import { prisma } from "@/lib/prisma";

export async function getAllMhs() {
  return await prisma.dataMhs.findMany({
    include: {
      statusMhs: {
        select: {
          status: true,
          ket: true,
        },
      },
    },
  });
}

export async function updateStatKet(nim: string, status: string, ket: string) {
  return await prisma.dataMhs.update({
    where: {
      nim: nim,
    },
    data: {
      statusMhs: {
        updateMany: {
          where: {
            nim: nim,
          },
          data: {
            status: status,
            ket: ket,
          },
        },
      },
    },
    include: {
      statusMhs: true,
    },
  });
}
