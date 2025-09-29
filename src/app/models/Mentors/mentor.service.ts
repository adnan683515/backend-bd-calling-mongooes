import { Types } from "mongoose";
import type { CourseInterFace } from "../Course/course.interface.js";
import { Course } from "../Course/course.modal.js";
import type { Imentors } from "./mentor.interface.js";
import { Mentor } from "./mentor.model.js";



export const createMentors = async (payLoad: Imentors) => {

    const { email } = payLoad
    const ckmentors = await Mentor.findOne({ email })
    if (ckmentors) {
        return false
    }
    const result = await Mentor.create(payLoad)
    return true
}


export const allMentorsService = async () => {

    const getData = await Mentor.find()
    return getData
}


export const getSingleMentorService = async (id: string) => {

    try {


        if (!Types.ObjectId.isValid(id)) {
            return { success: false, message: "Invalid mentor id format" };
        }

        const ckFinde = await Mentor.findOne({ _id: id })

        if (ckFinde) {
            return { data: ckFinde }
        }
        return null

    }
    catch (err) {
        console.log("mentor Details error", err)
    }

}


export const PartialUpdateMentorService = async (id: string, payLoad: Partial<Imentors>) => {

    try {

        if(!Types.ObjectId.isValid(id)){
            return false
        }
        const result = await Mentor.findByIdAndUpdate(id, { $set: payLoad, new: true })
        if(result){
            return true
        }
        return false

    }
    catch (err) {
        console.log("partial mentor update error", err)
    }
}