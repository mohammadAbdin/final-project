import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const childSchema = new mongoose.Schema({
  student_id: {
    type: String,
  },
});

const parentSchema = new mongoose.Schema({
  parent_id: { type: String, required: true, unique: true },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  children: [childSchema],
});

let Parent;

dbConnectionPromise.then((db) => {
  Parent = db.model("Parent", parentSchema, "Parent");
});

export default async function getParentModel() {
  if (!Parent) {
    await dbConnectionPromise;
  }
  return Parent;
}
