<template>
  <main class="flex flex-row justify-between items-center h-auto w-screen p-3">
    <!-- ICON -->
    <div class="flex flex-row gap-2 items-center">
      <img src="/Icon.png" alt="ICON" class="w-auto h-16" />
      <h1 class="text-3xl">Lagarto</h1>
    </div>
    <!-- NAV -->
    <nav class="flex flex-row gap-5">
      <NuxtLink
        v-for="(text, i) in content.nav"
        :key="i"
        :to="routes[i]"
        class="hover:cursor-pointer text-xl hover:text-lgt-beige-100"
        :class="
          $router.currentRoute.value.path == routes[i]
            ? 'underline'
            : 'text-lgt-beige-50'
        "
      >
        {{ text }}
      </NuxtLink>
    </nav>
    <!-- LANG -->
    <div class="flex gap-2">
      <button
        :class="userSettings.lang == 'de' ? 'underline' : 'text-lgt-beige-50'"
        class="hover:cursor-pointer hover:text-lgt-beige-100"
        @click="(userSettings.switchLang('de'), updateLang())"
      >
        DE
      </button>
      <button
        :class="userSettings.lang == 'en' ? 'underline' : 'text-lgt-beige-50'"
        class="hover:cursor-pointer hover:text-lgt-beige-100"
        @click="(userSettings.switchLang('en'), updateLang())"
      >
        EN
      </button>
    </div>
  </main>
  <hr class="border-lgt-beige-100 border-t w-full" />
</template>

<script setup lang="ts">
const userSettings = useUserSettings();

let content: { nav: string[] } = userSettings.getContent;
const routes = ["/", "/projects", "/aboutme", "/contact"];

function updateLang() {
  content = userSettings.getContent;
  console.log(content);
}
</script>
