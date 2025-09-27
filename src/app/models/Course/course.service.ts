import type { CourseInterFace } from "./course.interface.js";
import { Course } from "./course.modal.js";




//create course 
export const createCourse = async (payLoad : CourseInterFace)=>{
    const result = await Course.create(payLoad)
    return result
}


//get all course 
export const getAllcourses = async ()=>{
    const result  = await Course.find()
    return result
}


//delete course 
export const deleteCourse = async (id : string)=>{
    const result = await Course.findByIdAndDelete(id)
    return result
}


//get single using by id

export const getSingleCourse = async (id : string)=>{
    const result = await Course.findById(id)
    return result
}