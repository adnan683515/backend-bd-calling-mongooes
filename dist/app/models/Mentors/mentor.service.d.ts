import { Types } from "mongoose";
import type { Imentors } from "./mentor.interface.js";
export declare const createMentors: (payLoad: Imentors) => Promise<boolean>;
export declare const allMentorsService: () => Promise<(import("mongoose").Document<unknown, {}, Imentors, {}, {}> & Imentors & {
    _id: Types.ObjectId;
} & {
    __v: number;
})[]>;
export declare const getSingleMentorService: (id: string) => Promise<{
    success: boolean;
    message: string;
    data?: never;
} | {
    data: import("mongoose").Document<unknown, {}, Imentors, {}, {}> & Imentors & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    };
    success?: never;
    message?: never;
} | null | undefined>;
export declare const PartialUpdateMentorService: (id: string, payLoad: Partial<Imentors>) => Promise<boolean | undefined>;
//# sourceMappingURL=mentor.service.d.ts.map