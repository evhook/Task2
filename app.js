const addTaskButton = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Handle Add Button Click
addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText) {
    alert("Task added: " + taskText);

    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="remove-btn">X</button>
    `;

    // Toggle complete
    li.querySelector(".task-text").addEventListener("click", function () {
      this.classList.toggle("completed");
    });

    // Remove task
    li.querySelector(".remove-btn").addEventListener("click", function () {
      li.remove();
      alert("Task removed: " + taskText);
    });

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input
  } else {
    alert("Please enter a task.");
  }
});

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTaskButton.click();
  }
});
