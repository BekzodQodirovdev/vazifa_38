import { Task } from "../models/index.model.js";

export const crateTasks = async (req, res, next) => {
  try {
    const newTask = await Task({
      ...req.body,
    });
    await newTask.save();

    res.status(201).send({
      status: "Creted",
      Task: newTask._id,
    });
  } catch (err) {
    next(err);
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const data = await Task.find();
    if (!data) {
      return res.status(404).send("Not Found");
    }
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
};

export const getTasksById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const tasks = await Task.findById(id);

    if (!tasks) {
      return res.status(404).send("NOT FOUND");
    }

    res.status(200).send(tasks);
  } catch (err) {
    next(err);
  }
};

export const updateTasks = async (req, res, next) => {
  try {
    const id = req.params.id;

    const updataTask = await Task.findByIdAndUpdate(id, {...req.body});

    res.status(202).send({
      status: "Updated",
      id: updataTask._id,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteTasks = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteTask = await Task.findByIdAndDelete(id);

    res.status(200).send({
      status: "deletes",
      id: deleteTask.id,
    });
  } catch (err) {
    next(err);
  }
};
