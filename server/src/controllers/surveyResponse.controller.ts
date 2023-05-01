import express from 'express';
import { SurveyResponseModel } from '../models/surveyResponse.model';
import {Schema} from "mongoose";

const router = express.Router();

/******************************
 * Survey Response  APIs
 **************************** */
// Create user's response
router.post('/', async (req, res) => {
    const data = new SurveyResponseModel({
        userId: req.body.userId,
        surveyId: req.body.surveyId,
        response: req.body.response,
        date: req.body.date,
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});


// Get user response
router.get('/:user_id', async (req, res) => {
    const userId = req.params.user_id;
    try {
        const data = await SurveyResponseModel.find({ userId: userId });
        res.json(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

export default router;
