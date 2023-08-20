<script setup lang="ts">
import { useOverviewStore, Overview } from "@/composeables/stores/overview";

const title = ref("Titel");

const overviewStore = useOverviewStore();

const reachedPoints = computed(() => overviewStore.points);

const textOfTheStory = computed(() => overviewStore.latestStory?.story);

// await overviewStore.GET_GESCHICHTE();

const answers = ["A", "B", "C", "D", "E", "F"];

const giveCorrectAnswer = () => {
  const entry: Overview = {
    id: 5,
    pointsReached: 3,
  };

  overviewStore.UPDATE_ENTRY(entry);
};

const increase = () => {
  const entry: Overview = {
    id: 5,
    title: "test",
    date: new Date(),
    pointsReached: 1,
  };

  overviewStore.UPDATE_ENTRY(entry);
};
</script>

<template>
  <div>
    <h1 class="text-2xl">{{ title }}</h1>
    <div class="mx-4 mt-2">
      <v-card class="rounded-md" variant="outlined elevated">
        <p class="m-2">
          {{ textOfTheStory }}
        </p>
      </v-card>
      <div class="mt-10">
        <h2>Bitte gebe deine Antwort ein:</h2>
        <div>
          <v-btn
            v-for="answer in answers"
            :key="answer"
            class="mt-2 w-100"
            @click="giveCorrectAnswer"
            ><p class="text-xl">{{ answer }}</p></v-btn
          >
        </div>
      </div>
      <v-btn @click="increase">Test</v-btn>
      <div class="mt-2">
        <h2 v-if="reachedPoints > 0">Erreichte Punkte: {{ reachedPoints }}</h2>
      </div>
    </div>
  </div>
</template>
