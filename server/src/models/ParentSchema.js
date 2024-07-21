import mongoose from "mongoose";

const childSchema = new mongoose.Schema({
  name: String,
  id: String,
});

const parentSchema = new mongoose.Schema({
  notifications: [String],
  children: [childSchema],
});

export default mongoose.model("Parent", parentSchema);
