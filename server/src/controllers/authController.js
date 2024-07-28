import getUserModel from "../models/UserSchema.js";

export const getAllUsers = async (req, res) => {
  try {
    const User = await getUserModel();

    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
