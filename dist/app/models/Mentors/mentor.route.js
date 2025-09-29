import express from 'express';
import { mentorController } from './mentor.controller.js';
const route = express.Router();
//created route
route.post('/mentor-create', mentorController.mentorCreateController);
//get all  mentors route
route.get('/mentors', mentorController.mentorAllDataController);
//details mentor route
route.get('/mentorDetils/:id', mentorController.mentorDetailsController);
//partial update mentor route
route.patch('/update-mentor-info', mentorController.mentorPartailUpdatecontroller);
export const mentorRouter = route;
//# sourceMappingURL=mentor.route.js.map