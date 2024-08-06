import getclassModel from "../../models/ClassSchema.js";
import { restructureAllClasses } from "./restructureAllClasses.js";
export const GetAllClasses = async (req, res) => {
  try {
    const Class = await getclassModel();
    const classes = await Class.find({});
    const newClasses = restructureAllClasses(classes);
    res.status(200).json(newClasses);
  } catch (error) {
    throw new Error("Failed to fetch classes");
  }
};
