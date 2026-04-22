import { defineStore } from "pinia";
import deData from "~/i18n/de.json";
import enData from "~/i18n/en.json";

export const useUserSettings = defineStore("userSettings", {
  state: () => {
    return { lang: "de", deData, enData };
  },
  getters: {
    getContent() {
      if (this.lang == "de") {
        return deData;
      } else {
        return enData;
      }
    },
  },
  actions: {
    switchLang(newLang: string) {
      this.lang = newLang;
    },
  },
});
