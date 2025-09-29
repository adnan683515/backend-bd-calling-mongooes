import type { Request, Response } from "express";
interface Params {
    id: string;
}
export declare const mentorController: {
    mentorCreateController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    mentorAllDataController: (req: Request, res: Response) => Promise<void>;
    mentorDetailsController: (req: Request<Params>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    mentorPartailUpdatecontroller: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
export {};
//# sourceMappingURL=mentor.controller.d.ts.map