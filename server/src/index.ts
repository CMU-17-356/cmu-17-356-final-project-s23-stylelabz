import express, { Express } from 'express';
import cors from 'cors';
import clothingRouter from './controllers/clothing.controller';
import collectionRouter from './controllers/collection.conotroller';
import userRouter from './controllers/user.controller';
import surveyRouter from './controllers/survey.controller';
import surveyResponseRouter from './controllers/surveyResponse.controller';

const app: Express = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => console.log("Server started at", HOST,PORT));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', (req, res) => {
    res.send('Hello StyleLabz!');
});

app.use('/clothing', clothingRouter);
app.use('/collection', collectionRouter);
app.use('/user', userRouter);
app.use('/survey', surveyRouter);
app.use('/SurveyResponse', surveyResponseRouter)