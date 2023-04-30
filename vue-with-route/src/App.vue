<script setup lang="ts">
import SidebarComponent from './components/SidebarComponent.vue';
</script>

<template>
  <v-layout>
    <!-- App Bar -->
    <v-app-bar title="My Vue With Routing Application"></v-app-bar>

    <!-- Sidebar Navigation Menu -->
    <SidebarComponent />

    <!-- Main Body -->
    <v-main>
      <v-card>
        <router-view />
      </v-card>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
