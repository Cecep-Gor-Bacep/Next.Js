import { prisma } from "@/lib/prisma";

export async function getMhsAktif() {
  return await prisma.dataMhs.findMany({
    orderBy: {
      nim: "asc",
    },
    where: {
      statusMhs: {
        some: {
          status: "Aktif",
        },
      },
    },
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
  const statusNormal = status === "-" || status === "" ? null : status;
  const ketNormal = ket === "-" || ket === "" ? null : ket;

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
            status: statusNormal,
            ket: ketNormal,
          },
        },
      },
    },
    include: {
      statusMhs: true,
    },
  });
}

