import getUserModel from "../../models/UserSchema.js";
import getParentModel from "../../models/ParentSchema.js";

export const AddUser = async (req, res) => {
  try {
    const { userType, formData } = req.body;
    const { fullName, email, phone, id } = formData;
    console.log(req.body);
    const User = await getUserModel();
    const newUser = new User({
      name: fullName,
      email: email,
      password: id,
      //   phone: { type: String, required: true },
      userType: userType,
      notification: [],
    });
    // console.log(newUser._id);
    await newUser.save();
    const Parent = await getParentModel();
    const newParent = new Parent({
      parent_id: newUser._id,
      fullName: fullName,
      email: email,
      phone: phone,
      children: [],
    });
    // console.log(newParent);
    console.log("newParent", newParent);
    await newParent.save();
    res.status(200).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
