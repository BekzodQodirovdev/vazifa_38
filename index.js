import express from "express";
import { config } from "dotenv";
import { tasksRouter, userRouter } from "./router/index.routes.js";

config();

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/tasks", tasksRouter);

app.use((err, req, res, next) => {
  if (err) {
    return res.status(400).send({ massage: "error", errMassage: err.massage });
  }
  res.status(404).send("Not found");
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`PORT: ${port}`);
});
