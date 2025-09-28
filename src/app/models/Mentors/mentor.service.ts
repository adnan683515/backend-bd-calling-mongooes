import type { CourseInterFace } from "../Course/course.interface.js";
import { Course } from "../Course/course.modal.js";



export const createMentors = async (payLoad : CourseInterFace )=>{
    const result = await Course.create(payLoad)
    return result
}