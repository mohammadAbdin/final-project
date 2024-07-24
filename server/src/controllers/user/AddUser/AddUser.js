import getUserModel from "../../../models/UserSchema.js";
import { AddParent } from "./AddParent.js";
import { AddStudent } from "./AddStudent.js";
export const AddUser = async (req, res) => {
  try {
    const { userType, formData } = req.body;
    const { fullName, email, id } = formData;
    console.log("hi");
    console.log(req.body);
    const User = await getUserModel();
    const newUser = new User({
      name: fullName,
      email: email,
      password: id,
      userType: userType,
      notification: [],
    });
    // student_id: {
    //   type: String,
    //   unique: true,
    // },
    // parent_id: String,
    // name: String,
    // gender: String,
    // class: String,
    await newUser.save();

    switch (userType) {
      case "Student":
        AddStudent(formData, newUser, fullName, res);
        break;
      case "Parent":
        AddParent(formData, newUser, fullName, email, res);
        break;
      default:
        throw new Error("Invalid user type");
    }

    res.status(200).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
