<template>
  <div
    class="flex flex-row items-center justify-between min-w-130 shrink-0 border border-lgt-beige-100 p-8"
>
    <div class="flex flex-col gap-6">
      <div class="flex felx-row">
        <techLabel
          v-for="(label, i) in labels"
          :key="i"
          :text="label"
          :is-project="false"
          :color="label == 'Frontend' ? 'bg-tag-green' : 'bg-tag-red'"
        />
      </div>
      <h1 class="text-3xl">{{ title }}</h1>

      <div class="flex felx-row">
        <techLabel
          v-for="(p, i) in projects"
          :key="i"
          :is-project="true"
          :text="p"
          :color="'bg-tag-blue'"
        />
      </div>
    </div>
    <img :src="icon" :alt="title + ' Icon'" class="w-23 h-23">
  </div>
</template>

<script setup lang="ts">
import techLabel from "./techLabel.vue";

defineProps<{
  title: string;
  icon: string;
  labels?: string[];
  projects?: string[];
}>();
</script>
