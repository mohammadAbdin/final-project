import getParentModel from "../../models/ParentSchema.js";

export const getAllParents = async (req, res) => {
  try {
    const Parent = await getParentModel();

    // const parents = await Parent.aggregate([
    //   {
    //     $lookup: {
    //       from: "users",
    //       localField: "password",
    //       foreignField: "parent_id",
    //       as: "userDetails",
    //     },
    //   },
    //   {
    //     $unwind: "$userDetails",
    //   },
    //   {
    //     $match: {
    //       $expr: { $eq: ["$parent_id", "$userDetails._id"] }, // Match documents where parent_id equals userDetails._id
    //     },
    //   },
    //   {
    //     $project: {
    //       parent_id: 1,
    //       user_id: "$userDetails._id",
    //       userPassword: "$userDetails.password",
    //     },
    //   },
    // ]);
    const parents = await Parent.aggregate([
      {
        $addFields: {
          parent_id_as_objectId: { $toObjectId: "$parent_id" }, // Convert parent_id to ObjectId
        },
      },
      {
        $lookup: {
          from: "users", // The name of the User collection
          localField: "parent_id_as_objectId",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      {
        $unwind: "$userDetails", // Unwind the array returned by $lookup
      },
      {
        $project: {
          parent_id: 1,
          //   user_id: "$userDetails._id",
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
