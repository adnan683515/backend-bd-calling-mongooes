import { Course } from "../Course/course.modal.js";
import { Mentor } from "./mentor.model.js";
export const createMentors = async (payLoad) => {
    console.log("service mentor", payLoad);
    const result = await Mentor.create(payLoad);
    return result;
};
export const allMentorsService = async () => {
    const getData = await Mentor.find();
    return getData;
};
//# sourceMappingURL=mentor.service.js.map