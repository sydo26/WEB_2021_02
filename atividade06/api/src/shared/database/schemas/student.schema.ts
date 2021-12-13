import { Schema, model, Types } from "mongoose";

const StudentSchema = new Schema({
  registration: { type: Number, required: true, unique: true },
  name: { type: String, required: true, max: 100 },
  ira: { type: Number, required: true, max: 10, min: 0 },
  course: { type: String, required: true },
});

export const StudentModel = model("students", StudentSchema);
