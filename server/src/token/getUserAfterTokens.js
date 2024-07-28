import getUserModel from "../models/UserSchema.js";

export const getUserAfterTokens = async (req, res) => {
  try {
    const User = await getUserModel();
    const user = await User.findById(req.user.userId).select("-password");
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
