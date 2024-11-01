import { Router } from "express";
import {
  crateUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/index.controller.js";
export const userRouter = Router()
import { registrUserMiddleware } from "../middleware/index.middleware.js";

userRouter.get("/",getUsers)
userRouter.post("/",registrUserMiddleware, crateUser);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);