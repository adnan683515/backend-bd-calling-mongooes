import type { Schema, Types } from "mongoose";
export interface CourseInterFace {
    courseId: string;
    title: string;
    cetegory: Types.ObjectId;
    slug: string;
    type: string;
    image: string;
    fee: number;
    rating: number;
    totalRating: number;
    totalStudent: number;
    duration: number;
    totalExam: number;
    totalProject: number;
    courseDetails: string;
    carriculum: string[];
    courseTimeShedule: string[];
    mentor: {
        type: Schema.Types.ObjectId;
    };
}
//# sourceMappingURL=course.interface.d.ts.map