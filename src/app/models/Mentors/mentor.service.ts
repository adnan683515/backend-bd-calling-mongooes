import type { CourseInterFace } from "../Course/course.interface.js";
import { Course } from "../Course/course.modal.js";
import type { Imentors } from "./mentor.interface.js";
import { Mentor } from "./mentor.model.js";



export const createMentors = async (payLoad : Imentors  )=>{

    console.log("service mentor",payLoad)
    const result = await Mentor.create(payLoad)
    return result
}


export const allMentorsService = async ()=>{

    const getData = await Mentor.find()
    return getData
}