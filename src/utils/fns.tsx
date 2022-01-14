/* Theme */
export const themeStorageKey = "theme";

export const getTheme = (): string => {
  if (typeof window === "undefined") return "";
  if (typeof window === "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem(themeStorageKey, "dark");
    document.documentElement.classList.add("dark");
  }
  return localStorage.getItem(themeStorageKey);
};

export const setLightMode = (): void => {
  try {
    localStorage.setItem(themeStorageKey, "light");
    document.documentElement.classList.remove("dark");
  } catch (err) {
    console.error(err);
  }
};

export const setDarkMode = (): void => {
  try {
    localStorage.setItem(themeStorageKey, "dark");
    document.documentElement.classList.add("dark");
  } catch (err) {
    console.error(err);
  }
};
