import type { Request, Response } from "express";
interface Params {
    id: string;
}
export declare const Coursecontroller: {
    CreateCourseController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    GetCourseController: (req: Request, res: Response) => Promise<void>;
    DetailsCourseController: (req: Request<Params>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    DeleteCourseController: (req: Request<Params>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    PartialcourseController: (req: Request, res: Response) => Promise<void>;
};
export {};
//# sourceMappingURL=course.controller.d.ts.map