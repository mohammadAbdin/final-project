import getStudentModel from "../../../models/StudentSchema.js";

export const AddStudent = async (formData, newUser, fullName, res) => {
  //   const { gender, parent_id, class } = formData;
  try {
    const Student = await getStudentModel();
    const newStudent = new Student({
      parent_id: newUser._id,
      fullName: fullName,
      //   email: email,
      //   phone: phone,
      children: [],
    });
    // console.log(newParent);
    console.log("newStudent", newStudent);
    await newStudent.save();
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
