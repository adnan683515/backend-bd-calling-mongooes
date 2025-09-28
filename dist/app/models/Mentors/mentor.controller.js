import { allMentorsService, createMentors } from "./mentor.service.js";
const mentorCreateController = async (req, res) => {
    try {
        const result = await createMentors(req?.body);
        res.status(200).json({
            success: true,
            message: 'mentor created succeesfully',
            data: result
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: 'mentor create failed',
        });
    }
};
const mentorAllDataController = async (req, res) => {
    const result = await allMentorsService();
    res.send(result);
};
export const mentorController = {
    mentorCreateController,
    mentorAllDataController
};
//# sourceMappingURL=mentor.controller.js.map