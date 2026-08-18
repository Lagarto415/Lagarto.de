<template>
    <h1 class="text-xl text-lgt-yellow">{{ content.skills.headline }}</h1>

    <!-- SLIDER -->
    <div class="flex flex-row overflow-x-auto gap-5 w-full px-10 py-5">
        <SkillPanel v-for="(skill, i) in content.skills.panels" :key="i" :title="skill.title" :icon="skill.icon"
            :labels="skill.labels" :projects="skill.projects" />
    </div>

    <hr class="border-lgt-beige-100 border-t w-full">
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SkillPanel from './skillPanel.vue';

const userSettings = useUserSettings();

const content = computed(() => userSettings.getContent);
</script>