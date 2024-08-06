import getStudentModel from "../../../models/StudentSchema.js";
import getParentModel from "../../../models/ParentSchema.js";

export const AddStudent = async (formData, newUser, fullName, res) => {
  const { gender, parent_id } = formData;
  try {
    const Student = await getStudentModel();
    const newStudent = new Student({
      student_id: newUser._id,
      name: fullName,
      email: newUser.email,
      parent_id: parent_id,
      gender: gender,
      class: formData.class,
    });
    await newStudent.save();
    await newUser.save();

    try {
      const studentId = newUser._id.toString();
      const Parent = await getParentModel();
      const parent = await Parent.findOne({ parent_id: parent_id });

      if (parent) {
        parent.children.push({ student_id: studentId });
        await parent.save();
      } else {
        console.log("Parent not found");
      }
    } catch (error) {
      console.error("Error adding child to parent:", error);
    }
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
