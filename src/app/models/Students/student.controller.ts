import type { Request, Response } from "express";
import { createStudentService, getAllStudnetListService } from "./student.service.js";




export const StudentCreateController = async (req : Request, res : Response) =>{

    try{

        const result = await createStudentService(req?.body)
        if(result){
            return res.status(200).json({
                success : true
            })
        }
        return res.status(400).json({
            success: false
        })
    }
    catch(err){
        console.log("student created controller error", err)
    }
}


export const AllStudentsGetController = async (req:Request, res : Response)=>{

    const result = await getAllStudnetListService()
    res.status(200).json({
        data : result
    })
}