<template>
  <div
    class="flex flex-row items-center gap-3 bg-lgt-grey-100 px-3 py-1 m-1 rounded-sm"
  >
    <div class="w-3 h-3 rounded-full" :class="color"/>
    <p class="text-lgt-beige-50">{{ text }}</p>
    <svg
      v-if="isProject"
      class="w-4 h-4 text-lgt-yellow cursor-pointer"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      :aria-label="'view Project ' + text"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m12 16 4-4-4-4" />
      <path d="M8 12h8" />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  isProject: boolean;
  color: "bg-tag-green" | "bg-tag-blue" | "bg-tag-red";
}>();
</script>
