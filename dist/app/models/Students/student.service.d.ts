import type { IStudent } from "./student.interface.js";
export declare const createStudentService: (payLoad: IStudent) => Promise<unknown>;
export declare const getAllStudnetListService: () => Promise<(import("mongoose").Document<unknown, {}, IStudent, {}, {}> & IStudent & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
//# sourceMappingURL=student.service.d.ts.map