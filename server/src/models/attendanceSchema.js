import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  date: {
    type: String, // Format: 'month/day'
    required: true,
  },
  students: [
    {
      name: String,
      id: String,
    },
  ],
});

export default mongoose.model("Attendance", attendanceSchema);
