import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  image: String,
  youtubeUrl: String,
  description: String,
});

export default mongoose.model("Event", eventSchema);
