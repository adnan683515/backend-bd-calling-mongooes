import mongoose from "mongoose";
import type { CourseInterFace } from "./course.interface.js";
export declare const Course: mongoose.Model<CourseInterFace, {}, {}, {}, mongoose.Document<unknown, {}, CourseInterFace, {}, {}> & CourseInterFace & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=course.modal.d.ts.map