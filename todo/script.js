document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  function addTask(taskText) {
    const li = document.createElement("li");
    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;
    li.appendChild(taskTextSpan);
    taskList.appendChild(li);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function() {
      taskList.removeChild(li);
    });

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.addEventListener("click", function() {
      taskTextSpan.classList.toggle("completed");
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
  }
});
