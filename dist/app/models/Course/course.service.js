import { Course } from "./course.modal.js";
//create course 
const createCourse = async (payLoad) => {
    const result = await Course.create(payLoad);
    return result;
};
//get all course 
export const getAllcourses = async () => {
    const result = await Course.find();
    return result;
};
//delete course 
export const deleteCourse = async (id) => {
    const result = await Course.findByIdAndDelete(id);
    return result;
};
//get single using by id
export const getSingleCourse = async (id) => {
    const result = await Course.findById(id);
    return result;
};
export const courseService = {
    createCourse
};
//# sourceMappingURL=course.service.js.map