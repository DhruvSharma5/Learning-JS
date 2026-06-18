// Local Storage Keys
const STORAGE_KEYS = {
  TASKS: "domExplorerTasks",
  THEME: "domExplorerTheme"
};

// Save tasks
function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
}

// Get tasks
function getTasks() {
  const storedTasks = localStorage.getItem(STORAGE_KEYS.TASKS);

  return storedTasks ? JSON.parse(storedTasks) : [];
}

// Save theme
function saveTheme(theme) {
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
}

// Get theme
function getTheme() {
  return localStorage.getItem(STORAGE_KEYS.THEME) || "dark";
}