import type { CourseInterFace } from "./course.interface.js";
export declare const getAllcourses: () => Promise<(import("mongoose").Document<unknown, {}, CourseInterFace, {}, {}> & CourseInterFace & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
export declare const deleteCourse: (id: string) => Promise<(import("mongoose").Document<unknown, {}, CourseInterFace, {}, {}> & CourseInterFace & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
export declare const getSingleCourse: (id: string) => Promise<(import("mongoose").Document<unknown, {}, CourseInterFace, {}, {}> & CourseInterFace & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
export declare const courseService: {
    createCourse: (payLoad: CourseInterFace) => Promise<import("mongoose").Document<unknown, {}, CourseInterFace, {}, {}> & CourseInterFace & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
//# sourceMappingURL=course.service.d.ts.map