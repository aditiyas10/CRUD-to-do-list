const express = require("express");
const router = express.Router();
const Task = require("../config/db");
const {
  getTasks,
  addNewTask,
  editTask,
  deleteTask,
} = require("../controllers/task-controller");

router.get("/", getTasks);

router.post("/", addNewTask);

router.put("/:id", editTask);

router.delete("/:id", deleteTask);

module.exports = router;
