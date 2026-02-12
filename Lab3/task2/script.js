const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function createTodoItem(text) {
  const li = document.createElement("li");
  li.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "🗑";


  checkbox.addEventListener("change", () => {
    li.classList.toggle("done", checkbox.checked);
  });

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  taskList.appendChild(createTodoItem(text));
  taskInput.value = "";
  taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});


taskList.appendChild(createTodoItem("First item"));
taskList.appendChild(createTodoItem("Second item"));
taskList.appendChild(createTodoItem("Third item"));
