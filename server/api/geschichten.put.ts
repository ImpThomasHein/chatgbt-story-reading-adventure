import { Geschichte, PrismaClient } from "@prisma/client";
import { Overview } from "../../composeables/stores/overview";

const prisma = new PrismaClient();

async function updateGeschichten(overView: Overview): Promise<Geschichte> {
  if (!overView.id || overView?.id < 0) return;

  const overViewId = overView.id;

  const result = await prisma.geschichte.update({
    where: { id: overViewId },
    data: {
      hasRead: true,
      pointsReached: overView.pointsReached || 0,
      hasPlayed: overView.hasPlayed || false,
    },
  });
  return result;
}

export default defineEventHandler(async (event) => {
  const overview: Overview = await readBody(event);
  // TODO: Validation
  const result = await updateGeschichten(overview);
  return result;
});
