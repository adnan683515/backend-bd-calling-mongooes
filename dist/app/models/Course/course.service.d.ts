import type { CourseInterFace } from "./course.interface.js";
export declare const getAllcourses: () => Promise<(import("mongoose").Document<unknown, {}, CourseInterFace, {}, {}> & CourseInterFace & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
export declare const detailsCourseService: (id: string) => Promise<unknown>;
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
export declare const PartialCourseUpdateService: (id: string, payLoad: Partial<CourseInterFace>) => Promise<(import("mongoose").Document<unknown, {}, CourseInterFace, {}, {}> & CourseInterFace & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null | undefined>;
export declare const courseService: {
    createCourse: (payLoad: CourseInterFace) => Promise<unknown>;
    getAllcourses: () => Promise<(import("mongoose").Document<unknown, {}, CourseInterFace, {}, {}> & CourseInterFace & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    deleteCourse: (id: string) => Promise<(import("mongoose").Document<unknown, {}, CourseInterFace, {}, {}> & CourseInterFace & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    PartialCourseUpdateService: (id: string, payLoad: Partial<CourseInterFace>) => Promise<(import("mongoose").Document<unknown, {}, CourseInterFace, {}, {}> & CourseInterFace & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null | undefined>;
};
//# sourceMappingURL=course.service.d.ts.map