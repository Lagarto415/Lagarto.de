<template>
    <h1 class="text-xl text-lgt-yellow">{{ content.skills.headline }}</h1>

    <!-- SLIDER -->

    <hr class="border-lgt-beige-100 border-t w-full">
</template>

<script setup lang="ts">
import { computed } from 'vue';

const userSettings = useUserSettings();

const content = computed(() => userSettings.getContent);
</script>