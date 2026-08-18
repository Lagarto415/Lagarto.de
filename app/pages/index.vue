<template>
  <main class="flex flex-col justify-center items-center">
    <!-- HEADER -->
    <siteHeader />
    <!-- HERO -->
    <!-- SKILLS -->
    <skillsView />
    <!-- PROJECTS -->
    <!-- FOOTER -->
    <siteFooter />

    <NuxtLink to="/aboutme">About ME</NuxtLink>
  </main>
</template>

<script setup lang="ts">
import siteHeader from "~/components/siteHeader.vue";
import skillsView from "~/components/landing/skillsView.vue";
import siteFooter from "~/components/siteFooter.vue";
</script>
