import { Student } from "./student.model.js";
//post student data from data base 
export const createStudent = async (payLoad) => {
    try {
        const result = await Student.create(payLoad);
        return result;
    }
    catch (err) {
        return err;
    }
};
//# sourceMappingURL=student.service.js.map