const THEME_STORAGE_KEY = "smd-theme"; // Social Media Dashboard Theme
const DOCUMENT_THEME_ATTR_KEY = "data-theme";

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

const themeSwitch = document.querySelector("#theme-switch");

const setTheme = (theme) => {
  document.documentElement.setAttribute(DOCUMENT_THEME_ATTR_KEY, theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

window.onload = () => {
  const storageTheme = localStorage.getItem(THEME_STORAGE_KEY);

  switch (storageTheme) {
    case THEMES.LIGHT:
      setTheme(THEMES.LIGHT);
      themeSwitch.checked = false;
      break;
    case THEMES.DARK:
    default:
      setTheme(THEMES.DARK);
      themeSwitch.checked = true;
  }
};

themeSwitch.addEventListener("click", () => {
  if (themeSwitch.checked) {
    setTheme(THEMES.DARK);
  } else {
    setTheme(THEMES.LIGHT);
  }
});
