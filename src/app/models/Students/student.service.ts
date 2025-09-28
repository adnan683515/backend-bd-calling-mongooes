import type { IStudent } from "./student.interface.js";
import { Student } from "./student.model.js";




//post student data from data base 
export const createStudent = async (payLoad: IStudent) {
    try {
        const result = await Student.create(payLoad)
        return result
    }
    catch (err) {
        return err
    }
}



