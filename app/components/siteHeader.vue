<template>
    <main class="flex flex-row justify-between items-center h-auto w-screen p-3">
        <!-- ICON -->
        <div class="flex flex-row gap-2 items-center">
            <img src="/Icon.png" alt="ICON" class="w-auto h-[4rem]">
            <h1 class="text-[1.5rem]">Lagarto</h1>
        </div>
        <!-- NAV -->
        <nav>
            <NuxtLink v-for="i in 3" :key="i"> {{ userSettings.getContent.nav[i] }}
            </NuxtLink>
        </nav>
        <!-- LANG -->
        <div class="flex gap-2">
            <button :class="userSettings.lang == 'de' ? 'underline' : ''" @click="userSettings.switchLang">DE</button>
            <button :class="userSettings.lang == 'en' ? 'underline' : ''" @click="userSettings.switchLang">EN</button>
        </div>
    </main>
    <hr class="border-lgt-beige-100 border-t w-full">
</template>

<script setup lang="ts">
const userSettings = useUserSettings()

</script>