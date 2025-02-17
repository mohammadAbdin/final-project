import getUserModel from "../../models/UserSchema.js";
import jwt from "jsonwebtoken";
import process from "process";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const User = await getUserModel();
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    } else if (user.password === password) {
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res.cookie("token", token, {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      res.status(200).json({
        message: "Login successful",
        user,
        userType: user.userType,
        token: token,
      });
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
