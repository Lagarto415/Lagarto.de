import { defineStore } from "pinia";
import deData from "~/i18n/de.json";
import enData from "~/i18n/en.json";

export const useUserSettings = defineStore("userSettings", {
  state: () => ({
    lang: "de",
    deData,
    enData,
  }),
  getters: {
    getContent(): object {
      return this.lang === "de" ? this.deData : this.enData;
    },
  },
  actions: {
    switchLang(): void {
      this.lang = this.lang === "de" ? "en" : "de";
    },
  },
});
