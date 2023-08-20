import { Geschichte, PrismaClient } from "@prisma/client";
import { Overview } from "../../composeables/stores/overview";
import { useLogger } from "@nuxt/kit";

const prisma = new PrismaClient();

export async function getOverviews(): Promise<Overview[]> {
  const geschichten: Geschichte[] = await prisma.geschichte.findMany();
  const logger = useLogger();
  logger.info(geschichten);
  const result: Overview[] = geschichten.map((entry: Geschichte) => {
    return {
      id: entry.id,
      hasPlayed: entry.hasPlayed,
      pointsReached: entry.pointsReached,
      date: entry.createdAt,
      title: entry.title,
      story: entry.story,
    };
  });
  return result;
}
