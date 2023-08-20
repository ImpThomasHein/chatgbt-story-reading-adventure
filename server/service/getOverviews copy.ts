import { PrismaClient } from "@prisma/client";
import { Overview } from "../../composeables/stores/overview";

const prisma = new PrismaClient();

export async function getOverviews(): Promise<Overview[]> {
  const result = await prisma.geschichte.findMany();
  return result;
}
