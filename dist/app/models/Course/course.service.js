import { Course } from "./course.modal.js";
//create course 
const createCourse = async (payLoad) => {
    try {
        const { courseId } = payLoad;
        const result = await Course.create(payLoad);
        return result;
    }
    catch (err) {
        return err;
    }
};
//get all course  service
export const getAllcourses = async () => {
    const result = await Course.find();
    return result;
};
//get details course  service
export const detailsCourseService = async (id) => {
    try {
        const courseinfo = await Course.findOne({ _id: id });
        if (!courseinfo) {
            return null;
        }
        return courseinfo;
    }
    catch (err) {
        return err;
    }
};
//delete course  service
export const deleteCourse = async (id) => {
    const result = await Course.findByIdAndDelete(id);
    if (!result) {
        return null;
    }
    return result;
};
//get single using by id
export const getSingleCourse = async (id) => {
    const result = await Course.findById(id);
    return result;
};
//partial update course service
export const PartialCourseUpdateService = async (id, payLoad) => {
    try {
        const result = await Course.findByIdAndUpdate(id, {
            $set: payLoad // req?.body ar modde jah dibe oitai update hobe
        }, {
            new: true // updated document abr return dibe tay new tru
        });
        return result;
    }
    catch (err) {
        console.log("partial upate course", err);
    }
};
export const courseService = {
    createCourse,
    getAllcourses,
    deleteCourse,
    PartialCourseUpdateService
};
//# sourceMappingURL=course.service.js.map