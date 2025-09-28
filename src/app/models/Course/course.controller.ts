import type { Request, Response } from "express";
import { courseService } from "./course.service.js";





const CreateCourseController = async (req : Request , res : Response )=>{

    try{
        const courseResult  = await  courseService.createCourse(req?.body)
        res.status(200).json({
            success : true, 
            message : 'course Create successfully',
            result  : courseResult
        })
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            success : false,
            message : 'course create failed',

        })
    }

}

export const  Coursecontroller = {
    CreateCourseController
}