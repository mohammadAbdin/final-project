import getUserModel from "../../../models/UserSchema.js";

export const deleteAll = async (req, res) => {
  try {
    console.log("hi");

    const User = await getUserModel();
    await User.deleteMany({ userType: "Teacher" });
    console.log("All teachers have been deleted.");
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
