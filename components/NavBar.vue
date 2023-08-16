<script setup>

const title =  ref('');
title.value = "Zelda Leseapp für Noah"

</script>

<template>
  <v-card>
    <v-toolbar color="primary">

      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn>+ Neue Geschichte</v-btn>
      <v-btn>Punkte</v-btn>
      <template v-slot:extension>
        <v-tabs>
          <v-tab>Aktuelle Geschichte</v-tab>
          <v-tab>Übersicht</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>
