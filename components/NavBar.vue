<script setup>
const title = ref("Zelda Leseapp für Noah");
</script>

<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn>+ Neue Geschichte</v-btn>
      <v-btn>Punkte</v-btn>
      <template #extension>
        <v-tabs>
          <v-tab><NuxtLink to="/">Aktuelle Geschichte</NuxtLink></v-tab>
          <v-tab><NuxtLink to="/history">Übersicht</NuxtLink></v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>
