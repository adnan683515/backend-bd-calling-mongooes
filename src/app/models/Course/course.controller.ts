import type { Request, Response } from "express";
import { courseService, deleteCourse, detailsCourseService, PartialCourseUpdateService } from "./course.service.js";
import { Course } from "./course.modal.js";







//create controller
const CreateCourseController = async (req: Request, res: Response) => {

    try {

        const { courseId } = req?.body
        const ckExistingCourse = await Course.findOne({ courseId })
        if (ckExistingCourse) {
            return res.status(409).json({
                success: false,
                message: 'This course Already Exist!'
            })
        }
        const courseResult = await courseService.createCourse(req?.body)

        res.status(200).json({
            success: true,
            message: 'course Create successfully',
            result: courseResult
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            success: false,
            message: 'course create failed',

        })
    }

}



//all course controller
const GetCourseController = async (req: Request, res: Response) => {

    try {
        const getData = await courseService.getAllcourses()
        res.status(200).json({
            message: 'All-courses successfully Get',
            data: getData
        })
    }
    catch (err) {

        res.status(400).json({
            message: 'get-courses failed',
            error: err
        })
    }
}


interface Params {
    id: string
}


//details controller
const DetailsCourseController = async (req: Request<Params>, res: Response) => {



    try {
        const { id } = req?.params
        if (!id) {
            return res.status(409).json({
                success: false,
                message: 'please send id'
            })
        }
        const detailsData = await detailsCourseService(id)
        res.status(200).json({
            success: true,
            message: 'course Details',
            result: detailsData
        })
    }
    catch (err) {
        //
        console.log("Course Details", err)
    }
}

//delete course controller
const DeleteCourseController = async (req: Request<Params>, res: Response) => {

    try {
        const { id } = req?.params
        const result = await deleteCourse(id)

        console.log("result",result)
        
        if(!result){
            return res.status(400).json({
                success : false,
                message : 'course not found'
            })
        }
        res.status(200).json({
            success : true,
            message : 'course Deleted'
        })
    }
    catch (err) {
        console.log(err)
    }

}


//partial update controller
const PartialcourseController = async (req : Request, res : Response)=>{

    try{

        const {id, payLoad} = req?.body

        const result = await PartialCourseUpdateService(id  , payLoad)

        res.status(200).json({
            success : true,
            result
        })

    }
    catch(err){
        console.log(err)
    }
}



export const Coursecontroller = {
    CreateCourseController,
    GetCourseController,
    DetailsCourseController,
    DeleteCourseController ,
    PartialcourseController
}