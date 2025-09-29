import express from 'express';
import cors from 'cors';
import { CourseRoute } from './app/models/Course/course.routes.js';
import { mentorRouter } from './app/models/Mentors/mentor.route.js';
import { studentRouter } from './app/models/Students/student.route.js';




const app = express();

app.use(express.json());
app.use(cors());



//course router 
app.use('/course', CourseRoute)




//mentor router 
app.use('/mentor',mentorRouter)


//student router
app.use('/student',studentRouter)



app.get('/', (req, res) => {
    res.send('Hello World!');


});

export default app;