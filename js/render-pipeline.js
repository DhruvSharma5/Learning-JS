const taskForm = document.getElementById("taskForm");
const searchInput = document.getElementById("searchTask");
const filterCategory = document.getElementById("filterCategory");
const clearTasksBtn = document.getElementById("clearTasksBtn");

// Add Task
taskForm.addEventListener("submit", event => {
  event.preventDefault();

  const title = document
    .getElementById("taskTitle")
    .value
    .trim();

  const category = document.getElementById("taskCategory").value;

  if (!title || !category) return;

  addTask(title, category);

  taskForm.reset();
});

// Event Delegation
taskList.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");

  if (!button) return;

  const action = button.dataset.action;

  const card = button.closest(".task-card");

  const id = card.getAttribute("data-id");

  if (action === "edit") editTask(id);

  if (action === "complete") toggleTaskStatus(id);

  if (action === "delete") deleteTask(id);
});

// Search
searchInput.addEventListener("input", applyFilters);

// Filter
filterCategory.addEventListener("change", applyFilters);

function applyFilters() {
  const searchValue = searchInput.value.toLowerCase();

  const categoryValue = filterCategory.value;

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchValue);

    const matchesCategory =
      categoryValue === "all" ||
      task.category === categoryValue;

    return matchesSearch && matchesCategory;
  });

  renderTasks(filteredTasks);
}

// Clear all
clearTasksBtn.addEventListener("click", () => {
  if (confirm("Delete all tasks?")) {
    clearAllTasks();
  }
});

// Theme
themeToggle.addEventListener("click", toggleTheme);