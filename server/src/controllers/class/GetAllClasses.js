import getclassModel from "../../models/ClassSchema.js";
import { restructureAllClasses } from "./restructureAllClasses.js";
export const GetAllClasses = async (req, res) => {
  try {
    const Class = await getclassModel();
    const classes = await Class.find({});
    const newClasses = restructureAllClasses(classes);
    console.log(newClasses);
    res.status(200).json(newClasses);
  } catch (error) {
    throw new Error("Failed to fetch classes");
  }
};

// [
//   {
//     _id: "66a25e73848a3ef575d99625",
//     class: "1",
//     __v: 0,
//     schedule: [
//       {
//         day: "Sunday",
//         period: "08:00-09:00",
//         subject: "Biology",
//         _id: "66a25e715ecbec28d0c47a03",
//       },
//       {
//         day: "Monday",
//         period: "08:00-09:00",
//         subject: "Biology",
//         _id: "66a25e715ecbec28d0c47a04",
//       },
//       {
//         day: "Tuesday",
//         period: "08:00-09:00",
//         subject: "Biology",
//         _id: "66a25e715ecbec28d0c47a05",
//       },
//     ],
//     subjects: [
//       {
//         subject: "Biology",
//         teacher_id: "66a25e715ecbec28d0c479f6",
//         _id: "66a25e715ecbec28d0c47a02",
//         resources: [],
//         exams: [],
//       },
//     ],
//   },
//   {
//     _id: "66a25e73848a3ef575d99626",
//     class: "3",
//     __v: 0,
//     schedule: [
//       {
//         day: "Sunday",
//         period: "09:00-10:00",
//         subject: "Biology",
//         _id: "66a25e715ecbec28d0c47a08",
//       },
//       {
//         day: "Monday",
//         period: "09:00-10:00",
//         subject: "Biology",
//         _id: "66a25e715ecbec28d0c47a09",
//       },
//       {
//         day: "Tuesday",
//         period: "09:00-10:00",
//         subject: "Biology",
//         _id: "66a25e715ecbec28d0c47a0a",
//       },
//     ],
//     subjects: [
//       {
//         subject: "Biology",
//         teacher_id: "66a25e715ecbec28d0c479f6",
//         _id: "66a25e715ecbec28d0c47a07",
//         resources: [],
//         exams: [],
//       },
//     ],
//   },
// ];
