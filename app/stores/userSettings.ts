import { defineStore } from "pinia";
import deData from "~/i18n/de.json";
import enData from "~/i18n/en.json";

export const useUserSettings = defineStore("userSettings", {
  state: () => {
    return { lang: "de" };
  },
  getters: {
    async getContent() {
      if (this.lang == "de") {
        const data = await fetch("~/i18n/de.json");
        return data;
      } else {
        const data = await fetch("~/i18n/en.json");
        return data;
      }
    },
  },
  actions: {
    switchLang() {
      console.log("TRIGGER");
      if (this.lang == "de") {
        this.lang = "en";
      } else {
        this.lang = "de";
      }
    },
  },
});
