import { getTasks, addTask, deleteTask, updateTask } from "./api.js";

import { showTask, showEmptyState, hideEmptyState } from "./ui.js";

const form = document.querySelector(".form");
const taskInput = document.querySelector("#judulTugas");

const handleAddTask = async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
    const task = await addTask(data);

    taskInput.value = "";

    hideEmptyState();
    showTask(task);
  } catch (error) {
    console.log(error);
  }
};

const handleDeleteTask = async (e) => {
  if (e.target.classList.contains("close")) {
    const taskElement = e.target.closest(".tugas-wrapper");
    const taskId = taskElement.dataset.id;
    try {
      await deleteTask(taskId);

      taskElement.remove();

      const remainingTask = document.querySelectorAll(".tugas-wrapper");

      if (!remainingTask.length) {
        showEmptyState();
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const handleUpdateTask = async (e) => {
  if (!e.target.matches('input[type="checkbox"]')) {
    return;
  }

  const taskElement = e.target.closest(".tugas-wrapper");
  const taskId = taskElement.dataset.id;

  try {
    await updateTask(taskId, {
      isDone: e.target.checked,
    });
  } catch (error) {
    console.log(error);
  }
};

const handleLoadTask = async () => {
  try {
    const tasks = await getTasks();

    if (!tasks.length) {
      showEmptyState();
      return;
    }

    hideEmptyState();

    tasks.forEach(showTask);
  } catch (error) {
    console.log(error);
  }
};

export { handleAddTask, handleDeleteTask, handleLoadTask, handleUpdateTask };
