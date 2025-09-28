import express from 'express';
import cors from 'cors';
import { CourseRoute } from './app/models/Course/course.routes.js';
import { mentorRouter } from './app/models/Mentors/mentor.route.js';
const app = express();
app.use(express.json());
app.use(cors());
//course router 
app.use('/course', CourseRoute);
//mentor router 
app.use('/mentor', mentorRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
export default app;
//# sourceMappingURL=app.js.map