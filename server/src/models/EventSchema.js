import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  image: String,
  youtubeUrl: String,
  description: String,
});

let Event;

dbConnectionPromise.then((db) => {
  Event = db.model("Event", eventSchema); //i must add the collection name
});

export default async function getEventModel() {
  if (!Event) {
    await dbConnectionPromise;
  }
  return Event;
}
