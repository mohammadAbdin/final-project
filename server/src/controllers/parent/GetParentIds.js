import getParentModel from "../../models/ParentSchema.js";

export const getAllParents = async (req, res) => {
  try {
    const Parent = await getParentModel();

    const parents = await Parent.aggregate([
      {
        $addFields: {
          parent_id_as_objectId: { $toObjectId: "$parent_id" },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "parent_id_as_objectId",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      {
        $unwind: "$userDetails",
      },
      {
        $project: {
          parent_id: 1,
          userPassword: "$userDetails.password",
        },
      },
    ]);

    const passwords = parents.map((parent) => ({
      parent_id: parent.parent_id,
      userPassword: parent.userPassword,
    }));

    res.status(200).json(passwords);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
