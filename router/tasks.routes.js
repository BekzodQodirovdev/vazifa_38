import { Router } from "express";
import {
  crateTasks,
  getTasks,
  getTasksById,
  updateTasks,
  deleteTasks,
} from "../controller/index.controller.js";
export const tasksRouter = Router();

tasksRouter.get("/", getTasks);
tasksRouter.post("/", crateTasks);
tasksRouter.get("/:id", getTasksById);
tasksRouter.put("/:id", updateTasks);
tasksRouter.delete("/:id", deleteTasks);
