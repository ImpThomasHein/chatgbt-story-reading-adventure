import { useOverviewStore } from "../composeables/stores/overview";

export default defineNuxtPlugin(async (nuxtApp) => {
  const logger = useLogger();
  logger.info(nuxtApp.$pinia);

  const overViewStore = useOverviewStore();
  await overViewStore.GET_GESCHICHTE();
  logger.info("onAppliationSTart: " + overViewStore.points);
});
