<script setup lang="ts">
import { useOverviewStore } from "@/composeables/stores/overview";

const overViewStore = useOverviewStore();
await overViewStore.GET_GESCHICHTE();
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
