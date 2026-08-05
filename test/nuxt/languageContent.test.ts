import { describe, expect, it } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useUserSettings } from "~/stores/userSettings";

describe("userSettings language content", () => {
  it("updates the content getter when the store language changes", () => {
    setActivePinia(createPinia());
    const userSettings = useUserSettings();

    expect(userSettings.getContent.nav[0]).toBe("Start");

    userSettings.switchLang();

    expect(userSettings.getContent.nav[0]).toBe("Home");
  });
});
