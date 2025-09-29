import express from 'express';
import { Coursecontroller } from './course.controller.js';
import { Course } from './course.modal.js';
const route = express.Router();
//created route
route.post('/create-course', Coursecontroller.CreateCourseController);
//get course route 
route.get('/get-courses', Coursecontroller.GetCourseController);
//get details route 
route.get('/get-courses/:id', Coursecontroller.DetailsCourseController);
//delete course route
route.delete('/deletecourse/:id', Coursecontroller.DeleteCourseController);
//partial update route
route.patch('/partial-course-update', Coursecontroller.PartialcourseController);
export const CourseRoute = route;
//# sourceMappingURL=course.routes.js.map