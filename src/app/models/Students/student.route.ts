

import express from 'express'
import { AllStudentsGetController, StudentCreateController } from './student.controller.js';


const route = express.Router()


route.post('/student-created', StudentCreateController)
route.get('/get-all-student', AllStudentsGetController)


export const studentRouter = route