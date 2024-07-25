import getUserModel from "../../../models/UserSchema.js";
import { AddParent } from "./AddParent.js";
import { AddStudent } from "./AddStudent.js";
import { AddTeacher } from "./AddTeacher.js";
export const AddUser = async (req, res) => {
  try {
    const { userType, formData } = req.body;
    const { fullName, email, id } = formData;

    // console.log(req.body);
    const User = await getUserModel();
    const newUser = new User({
      name: fullName,
      email: email,
      password: id,
      userType: userType,
      notification: [],
    });
    switch (userType) {
      case "Student":
        AddStudent(formData, newUser, fullName, res);
        break;
      case "Parent":
        AddParent(formData, newUser, fullName, email, res);
        break;
      case "Teacher":
        AddTeacher(formData, newUser, fullName, email, res);
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
