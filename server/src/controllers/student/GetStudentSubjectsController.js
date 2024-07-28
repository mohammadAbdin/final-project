import getStudentModel from "../../models/StudentSchema.js";

export const GetStudentSubjects = async (req, res) => {
  try {
    const { id } = req.params;
    const Student = await getStudentModel();
    const result = await Student.aggregate([
      { $match: { student_id: id } },
      {
        $lookup: {
          from: "classes",
          localField: "class",
          foreignField: "class",
          as: "classInfo",
        },
      },
      { $unwind: "$classInfo" }, // Unwind the classInfo array
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    // console.log("result", result[0].classInfo.subjects);
    // const student = result[0];
    // const { classInfo } = student;
    const subjects = result[0].classInfo.subjects.map(
      (subjectObj) => subjectObj.subject
    );
    console.log(subjects);
    // Return the student data along with the class schedule
    res.status(200).json(subjects);
  } catch (error) {
    console.error("Error fetching student schedule:", error);
    res.status(500).json({ message: "Server error" });
  }
  // console.log("id", id);

  // const student = await Student.aggregate([
  //   {
  //     $addFields: {
  //       parent_id_as_objectId: { $toObjectId: "$parent_id" }, // Convert parent_id to ObjectId
  //     },
  //   },
  //   {
  //     $lookup: {
  //       from: "users", // The name of the User collection
  //       localField: "parent_id_as_objectId",
  //       foreignField: "_id",
  //       as: "userDetails",
  //     },
  //   },
  //   {
  //     $unwind: "$userDetails", // Unwind the array returned by $lookup
  //   },
  //   {
  //     $project: {
  //       parent_id: 1,
  //       //   user_id: "$userDetails._id",
  //       userPassword: "$userDetails.password",
  //     },
  //   },
  // ]);
  // const student = await Student.findOne({ student_id: id });
  // if (!student) {
  //   return res.status(404).json({ message: "Student not found" });
  // }
  // const newArray = student.schedule.map(
  //   ({ day, period, class: className }) => ({
  //     day,
  //     period,
  //     class: className,
  //   })
  // );
  // res.status(200).json(newArray);
};
