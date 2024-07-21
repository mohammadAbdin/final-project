import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  notification: { type: [String], required: false },
});

let User;

dbConnectionPromise.then((db) => {
  User = db.model("User", userSchema, "users");
});

export default async function getUserModel() {
  if (!User) {
    await dbConnectionPromise;
  }
  return User;
}
