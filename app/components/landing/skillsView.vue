<template>
  <div class="flex flex-col justify-between w-full items-center">
    <h1 class="text-xl text-lgt-yellow">{{ content.skills.headline }}</h1>

    <ClientOnly>
      <ScrollAreaRoot
        v-if="content?.skills?.panels?.length"
        :key="content.skills.panels.length"
        type="always"
        class="w-full flex flex-col items-center"
      >
        <!-- Scrollable Viewport (do NOT add overflow-hidden here) -->
        <ScrollAreaViewport class="w-full">
          <div class="flex flex-row gap-10 w-max p-10">
            <SkillPanel
              v-for="(skill, i) in content.skills.panels"
              :key="i"
              :title="skill.title"
              :icon="skill.icon"
              :labels="skill.labels"
              :projects="skill.projects"
            />
          </div>
        </ScrollAreaViewport>

        <!-- Detached Custom Track -->
        <ScrollAreaScrollbar
          orientation="horizontal"
          class="relative mx-auto mt-2 flex h-2.5 w-64 md:w-80 select-none touch-none rounded-full bg-neutral-800 p-0"
        >
          <!-- Visible Beige/Yellow Thumb -->
          <ScrollAreaThumb class="relative h-full min-w-8 rounded-full bg-lgt-beige-50" />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>
    </ClientOnly>

    <hr class="border-lgt-beige-100 border-t w-full mt-6">
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import SkillPanel from "./skillPanel.vue";
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb
} from "radix-vue";

const userSettings = useUserSettings();
const content = computed(() => userSettings.getContent);
</script>