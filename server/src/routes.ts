import express, { Request, Response } from 'express';
import clothingRouter from './controllers/clothing.controller'
import collectionRouter from './controllers/collection.controller';
import userRouter from './controllers/user.controller';
import surveyRouter from './controllers/survey.controller';
import swipeRouter from './controllers/swipe.controller';

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Hello StyleLabz!');
});

router.use('/clothing', clothingRouter);
router.use('/collection', collectionRouter);
router.use('/user', userRouter);
router.use('/survey', surveyRouter);
router.use('/swipe', swipeRouter);

export default router;
