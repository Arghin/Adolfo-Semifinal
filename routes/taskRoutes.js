// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTasksById,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// Route definitions
router.get("/api/tasks", getAllTasks);
router.get("/api/tasks/:id", getTasksById);
router.post("/api/tasks", addTask);
router.put("/api/tasks/:id", updateTask);
router.delete("/api/tasks/:id", deleteTask);

module.exports = router;

