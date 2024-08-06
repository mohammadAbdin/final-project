import getParentModel from "../../models/ParentSchema.js";

export const getParentChildren = async (req, res) => {
  try {
    const { id } = req.params;
    const Parent = await getParentModel();
    const result = await Parent.aggregate([
      { $match: { parent_id: id } },
      { $unwind: "$children" },
      {
        $lookup: {
          from: "students",
          localField: "children.student_id",
          foreignField: "student_id",
          as: "studentDetails",
        },
      },
      { $unwind: "$studentDetails" },
      {
        $group: {
          _id: "$student_id",
          parent_id: { $first: "$parent_id" },
          children: {
            $push: {
              student_id: "$children.student_id",
              name: "$studentDetails.name",
              class: "$studentDetails.class",
            },
          },
        },
      },
    ]);
    const restructuredStudents = result[0].children.map(
      ({ name, class: studentClass, student_id }) => ({
        student_id: student_id,
        studentName: name,
        class: studentClass,
        average: 80,
      })
    );

    res.status(200).json(restructuredStudents);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
