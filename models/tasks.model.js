import mongoose from "mongoose";
import { config } from "dotenv";

config();

const { connect, model, Schema } = mongoose;

const db_uri = process.env.MONGO_URI;

connect(db_uri);

const taskSchema = new Schema(
  {
    title: String,
    description: String,
    userId: String,
  },
  {
    timestamps: true,
  }
);


export const Task = model("Tasks", taskSchema);