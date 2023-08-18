<script setup lang="ts">
import { useOverviewStore } from "@/composeables/stores/overview";
const overviewStore = useOverviewStore();
const history = computed(() => overviewStore.overViews);
</script>
<template>
  <div>
    <h1>In History</h1>
    <v-table>
      <thead>
        <tr>
          <th>Datum</th>
          <th>Titel</th>
          <th>Punkte</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in history" :key="entry">
          <td>{{ entry.date }}</td>
          <td>{{ entry.title }}</td>
          <td>{{ entry.pointsReached }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
