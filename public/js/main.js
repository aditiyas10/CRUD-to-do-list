import {
  handleAddTask,
  handleDeleteTask,
  handleUpdateTask,
  handleLoadTask,
} from "./handler.js";

const form = document.querySelector(".form");
const taskList = document.querySelector(".daftarTugas");

form.addEventListener("submit", handleAddTask);
taskList.addEventListener("click", handleDeleteTask);
taskList.addEventListener("change", handleUpdateTask);

handleLoadTask();
