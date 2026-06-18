let tasks = getTasks();

const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");

function createTaskObject(title, category) {
  return {
    id: crypto.randomUUID(),
    title,
    category,
    status: "pending",
    createdAt: new Date().toLocaleString()
  };
}

function addTask(title, category) {
  const task = createTaskObject(title, category);

  tasks.unshift(task);

  saveTasks(tasks);

  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);

  saveTasks(tasks);

  renderTasks();
}

function toggleTaskStatus(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      return {
        ...task,
        status: task.status === "pending" ? "completed" : "pending"
      };
    }

    return task;
  });

  saveTasks(tasks);

  renderTasks();
}

function editTask(id) {
  const task = tasks.find(task => task.id === id);

  const updatedTitle = prompt("Edit task title:", task.title);

  if (!updatedTitle || !updatedTitle.trim()) return;

  task.title = updatedTitle.trim();

  saveTasks(tasks);

  renderTasks();
}

function clearAllTasks() {
  tasks = [];

  saveTasks(tasks);

  renderTasks();
}

function renderTasks(filteredTasks = tasks) {
  taskList.innerHTML = "";

  emptyState.style.display = filteredTasks.length
    ? "none"
    : "block";

  const fragment = document.createDocumentFragment();

  filteredTasks.forEach(task => {
    const card = document.createElement("article");

    card.className = "task-card";

    // Required data attributes
    card.setAttribute("data-id", task.id);
    card.setAttribute("data-status", task.status);
    card.dataset.category = task.category;

    const content = document.createElement("div");
    content.className = "task-content";

    const title = document.createElement("h3");
    title.className = "task-title";

    const titleText = document.createTextNode(task.title);
    title.appendChild(titleText);

    const meta = document.createElement("div");
    meta.className = "task-meta";

    const category = document.createElement("span");
    category.className = "task-badge";
    category.textContent = task.category;

    const status = document.createElement("span");
    status.className = `task-status ${task.status}`;
    status.textContent = task.status;

    const date = document.createElement("span");
    date.className = "task-date";
    date.textContent = task.createdAt;

    meta.append(category, status, date);

    content.append(title, meta);

    const actions = document.createElement("div");
    actions.className = "task-actions";

    actions.innerHTML = `
      <button class="btn btn-secondary" data-action="edit">
        Edit
      </button>

      <button class="btn btn-primary" data-action="complete">
        ${task.status === "completed" ? "Undo" : "Complete"}
      </button>

      <button class="btn btn-danger" data-action="delete">
        Delete
      </button>
    `;

    card.append(content, actions);

    fragment.appendChild(card);
  });

  taskList.appendChild(fragment);

  updateStats();
}

function updateStats() {
  const total = tasks.length;

  const completed = tasks.filter(
    task => task.status === "completed"
  ).length;

  const pending = total - completed;

  document.getElementById("totalTasks").textContent = total;
  document.getElementById("completedTasks").textContent = completed;
  document.getElementById("pendingTasks").textContent = pending;
}