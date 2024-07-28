import getParentModel from "../../../models/ParentSchema.js";

export const AddParent = async (formData, newUser, fullName, email, res) => {
  const { phone } = formData;
  try {
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
    await newUser.save();
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
