import { Student } from "./student.model.js";
//post student data from data base 
export const createStudentService = async (payLoad) => {
    try {
        const { email } = payLoad;
        const ckStudent = await Student.findOne({ email });
        console.log("ckstudnet", ckStudent, email);
        if (ckStudent) {
            return false;
        }
        const result = await Student.create(payLoad);
        return result;
    }
    catch (err) {
        return err;
    }
};
export const getAllStudnetListService = async () => {
    const result = await Student.find();
    return result;
};
//# sourceMappingURL=student.service.js.map