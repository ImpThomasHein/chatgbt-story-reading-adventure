<script setup lang="ts">
import { useOverviewStore } from "@/composeables/stores/overview";
const title = ref("Zelda Leseapp für Noah");

const router = useRouter();

const overviewStore = useOverviewStore();

const reachedPoints = computed(() => overviewStore.points);

const createNewStory = () => {
  overviewStore.CREATE_NEW_STORY();
  router.push("/");
};
</script>

<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="createNewStory">+ Neue Geschichte</v-btn>
      <v-btn>Punkte: {{ reachedPoints }}</v-btn>
      <template #extension>
        <v-tabs>
          <v-tab><NuxtLink to="/">Aktuelle Geschichte</NuxtLink></v-tab>
          <v-tab><NuxtLink to="/history">Übersicht</NuxtLink></v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>
