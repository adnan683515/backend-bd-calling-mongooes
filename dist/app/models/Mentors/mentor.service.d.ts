import type { Imentors } from "./mentor.interface.js";
export declare const createMentors: (payLoad: Imentors) => Promise<import("mongoose").Document<unknown, {}, Imentors, {}, {}> & Imentors & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const allMentorsService: () => Promise<(import("mongoose").Document<unknown, {}, Imentors, {}, {}> & Imentors & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
//# sourceMappingURL=mentor.service.d.ts.map