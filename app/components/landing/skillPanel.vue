<template>
    <div class="w-90 h-auto border border-lgt-beige-100 p-5">
        <div class="flex felx-row gap-1">
            <div v-for="(label, i) in labels" :key="i"
                class="flex flex-row items-center gap-3 bg-lgt-grey-100 px-3 py-1 m-1 rounded-sm">
                <div class="w-3 h-3 rounded-full" :class="label == 'Frontend' ? 'bg-green-700' : 'bg-orange-400'"></div>
                <p>{{ label }}</p>
            </div>
        </div>
        <div class="flex flex-row justify-around items-center py-5">
            <h1 class="text-2xl">{{ title }}</h1>
            <img :src="icon" :alt="title + ' Icon'" class="w-25">
        </div>
        <div class="flex felx-row gap-1">
            <div v-for="(p, i) in projects" :key="i"
                class="flex flex-row items-center gap-3 bg-lgt-grey-100 px-3 py-1 m-1 rounded-sm">
                <div class="w-3 h-3 rounded-full bg-blue-700"></div>
                <p>{{ p }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    icon: string,
    labels?: string[],
    projects?: string[],
}>()
</script>