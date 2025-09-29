
import type { IStudent } from "./student.interface.js";
import { Student } from "./student.model.js";




//post student data from data base 
export const createStudentService = async (payLoad: IStudent)=> {
    try {
        const {email} = payLoad
        const ckStudent = await Student.findOne({email})

        if(ckStudent){
            return false
        }
        const result = await Student.create(payLoad)
        return result
    }
    catch (err) {
        return err
    }
}



//get all student service
export const getAllStudnetListService = async ()=>{

    const result = await Student.find()
    return result
}
