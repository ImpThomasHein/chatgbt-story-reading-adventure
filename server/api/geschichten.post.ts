import { Geschichte, PrismaClient } from "@prisma/client";
import { Overview } from "../../composeables/stores/overview";

const prisma = new PrismaClient();

async function createNewOverview(
  story: string,
  title: string,
): Promise<Geschichte> {
  const newGesichte = {
    createdAt: new Date(),
    hasRead: false,
    pointsReached: 0,
    hasPlayed: false,
    story,
    title,
  };

  const result = await prisma.geschichte.create({
    data: newGesichte,
  });
  return result;
}

export default defineEventHandler(async (event) => {
  const overview: Overview = await readBody(event);
  // TODO: Validation
  const result = await createNewOverview(overview.story, overview.title);
  return result;
});
