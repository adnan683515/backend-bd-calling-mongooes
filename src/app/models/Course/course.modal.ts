
import mongoose from "mongoose";
import type { CourseInterFace } from "./course.interface.js";

const { Schema } = mongoose;


const courseSchema = new Schema<CourseInterFace>({

    courseId: { type: String, required: true },
    title: { type: String, required: true },

    cetegory: { type: Schema.Types.ObjectId, required: true },
    slug: { type: String, required: true },
    type: { type: String, required: true },
    image: { type: String, required: true },
    fee: { type: Number, required: true },
    rating: { type: Number, required: true },
    totalRating: { type: Number, required: true },
    totalStudent: { type: Number, required: true },
    duration: { type: Number, required: true },
    totalExam: { type: Number, required: true },
    totalProject: { type: Number, required: true },
    courseDetails: { type: String, required: true },
    carriculum: { type: [String], required: true },
    courseTimeShedule: { type: [String], required: true }
    
})