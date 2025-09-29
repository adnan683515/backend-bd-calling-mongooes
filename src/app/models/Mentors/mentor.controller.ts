import type { Request, Response } from "express";
import { allMentorsService, createMentors, getSingleMentorService, PartialUpdateMentorService } from "./mentor.service.js";




const mentorCreateController = async (req: Request, res: Response) => {

    try {
        const result = await createMentors(req?.body)

        if (result) {
            return res.status(200).json({
                success: true,
                message: 'mentor created succeesfully',
                data: result
            })
        }

        return res.status(409).json({
            success: true,
            message: 'This email already exist',
            data: result
        })


    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            success: false,
            message: 'mentor create failed',

        })
    }
}

const mentorAllDataController = async (req: Request, res: Response) => {
    const result = await allMentorsService()
    res.send(result)
}

interface Params {

    id: string

}

//mentor details controller
const mentorDetailsController = async (req: Request<Params>, res: Response) => {

    try {
        const result = await getSingleMentorService(req?.params?.id)
        if (result) {
            return res.status(200).json({
                data: result
            })
        }
        return res.status(404).json({
            mentorDetails: result
        })
    }
    catch (err) {
        console.log("mentors details controller", err)
    }

}


//partial update mentor controller

const mentorPartailUpdatecontroller = async (req: Request, res: Response) => {

    try {

        const { id, payLoad } = req?.body
        const result = await PartialUpdateMentorService(id, payLoad)
        if (result) {
            return res.status(200).json({
                modifiedcount: true
            })
        }

        res.status(404).json({
            modifiedcount : false
        })

    }
    catch (err) {
        console.log("partail update mentor controller")
    }
}




export const mentorController = {
    mentorCreateController,
    mentorAllDataController,
    mentorDetailsController,
    mentorPartailUpdatecontroller
}