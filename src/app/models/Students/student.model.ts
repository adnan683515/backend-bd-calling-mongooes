import { model, Schema } from "mongoose"
import type { IStudent } from "./student.interface.js"
 





const StudentShcema = new Schema<IStudent>({



    id: { type: String, required: true },
    name: { type: String, required: true, maxLength: 10 },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    dateOfBirth: String,
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    address: { type: String, required: true },
    guardian: { type: String, required: true },
    profileImg: { type: String, required: true },
    courseName: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
})



export const Student = model<IStudent>('students', StudentShcema)