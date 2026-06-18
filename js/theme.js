const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  html.setAttribute("data-theme", theme);

  themeToggle.querySelector(".theme-icon").textContent =
    theme === "dark" ? "🌙" : "☀️";

  saveTheme(theme);
}

function toggleTheme() {
  const currentTheme = html.dataset.theme;

  const newTheme =
    currentTheme === "dark" ? "light" : "dark";

  applyTheme(newTheme);
}