import express from 'express'
import { Coursecontroller } from './course.controller.js'



const route = express.Router()


route.post('/create-course',Coursecontroller.CreateCourseController)


export  const CourseRoute = route
