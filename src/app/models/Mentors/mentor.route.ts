
import express from 'express'
import { mentorController } from './mentor.controller.js'



const route = express.Router()


route.post('/mentor-create',mentorController.mentorCreateController)
route.get('/mentors',mentorController.mentorAllDataController)


export const mentorRouter = route