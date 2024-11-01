import { User } from "../models/index.model.js";

export const crateUser = async (req, res, next) => {
  try {
    const newUser = await User({
      ...req.body,
    });
    await newUser.save();

    res.status(201).send({
      status: "Creted",
      user: newUser._id,
    });
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const data = await User.find().select({ password: 0 });
    if (!data) {
      return res.status(404).send("Not Found");
    }
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const users = await User.findById(id).select({ password: 0 });

    if (!users) {
      return res.status(404).send("NOT FOUND");
    }

    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const updataUser = await User.findByIdAndUpdate(id, { ...req.body });

    res.status(202).send({
      status: "Updated",
      id: updataUser._id,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteUser = await User.findByIdAndDelete(id);

    res.status(200).send({
      status: "deletes",
      id: deleteUser.id,
    });
  } catch (err) {
    next(err);
  }
};
