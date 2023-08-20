<script setup lang="ts">
import { Overview, useOverviewStore } from "@/composeables/stores/overview";
const overviewStore = useOverviewStore();
const history: ComputedRef<Overview[]> = computed(() =>
  overviewStore.overViews.sort((a, b) => new Date(b.date) - new Date(a.date)),
);
</script>
<template>
  <div>
    <h1 class="text-2xl">Erreichte Leistungen</h1>
    <v-table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Datum</th>
          <th>Titel</th>
          <th>Punkte</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in history" :key="entry">
          <td>{{ entry.id }}</td>
          <td>{{ entry.date }}</td>
          <td>{{ entry.title }}</td>
          <td>{{ entry.pointsReached }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
