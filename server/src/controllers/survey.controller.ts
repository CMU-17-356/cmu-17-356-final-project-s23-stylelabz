import express, { Request, Response } from 'express';
import { SurveyModel } from '../models/survey.model';

const router = express.Router();

/******************************
 * Survey APIs
 **************************** */
// Create user's response
router.post('/', async (req: Request, res: Response) => {
    try {
        if (req.body.userId && req.body.response) {
            const data = new SurveyModel({
                userId: req.body.userId,
                response: { ...req.body.response }
            });
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
        } else {
            res.status(400).json({ message: "Bad Request" });
        }

    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});


// Get user response
router.get('/:user_id', async (req: Request, res: Response) => {
    const userId = req.params.user_id;
    try {
        SurveyModel
            .findOne({ userId: userId })
            .exec()
            .then((data) => res.json(data));
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

export default router;
