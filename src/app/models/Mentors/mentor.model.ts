import { model, Schema } from "mongoose";
import type { Imentors } from "./mentor.interface.js";


export const mentorShcema = new Schema<Imentors>({
    id: {type : String, required : true},
    name: {type : String, required : true , maxLength : 10 , minlength : 5 },
    gender: {type : String, enum : ['male','female','other'], required : true},
    dateOfBirth: {type : String,required : true},
    email: {type : String, unique : true, required : true},
    contactNo: {type : String, unique : true, required : true},
    emerygencyContact: {type : String, unique : true , required : true},
    address: {type : String, required : true},
    profileImg:  {type : String, required : true},
    desgisnation: {type : String, required : true},
    specialized_area:{type : [String], required : true},
    education_qualification: {type : [String], required : true},
    workExperience: {type : [String], required : true},
    experience_Years: {type : [String], required : true},
    experienceTrainedStudent: {type : String, required : true},
    reviews: {type : Number },
    bio: {type : String, required : true},
    lifeJourney: {type : String, required : true},
    createdAt: {type : Date},
    updateAta: {type : Date}
})


export const Mentor = model<Imentors>('mentors', mentorShcema)