<template>
  <main class="flex flex-col justify-between items-center min-h-screen">
    <!-- HEADER -->
    <siteHeader />
    <!-- HERO -->
    <!-- SKILLS -->
    <skillsView />
    <!-- PROJECTS -->
    <!-- FOOTER -->
    <siteFooter />
  </main>
</template>

<script setup lang="ts">
import siteHeader from "~/components/siteHeader.vue";
import skillsView from "~/components/landing/skillsView.vue";
import siteFooter from "~/components/siteFooter.vue";
</script>
