import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const childSchema = new mongoose.Schema({
  // name: String,
  student_id: {
    type: String,
    required: true,
    unique: true, // Ensure the teacher_id is unique
  },
});

const parentSchema = new mongoose.Schema({
  children: [childSchema],
});

let Parent;

dbConnectionPromise.then((db) => {
  Parent = db.model("Parent", parentSchema); //i must add the collection name
});

export default async function getParentModel() {
  if (!Parent) {
    await dbConnectionPromise;
  }
  return Parent;
}
