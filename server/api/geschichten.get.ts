import { getOverviews } from "../service/getOverviews";

export default defineEventHandler(async () => {
  const results = await getOverviews();
  return results;
});
