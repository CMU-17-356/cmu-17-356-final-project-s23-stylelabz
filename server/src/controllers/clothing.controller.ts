import express, { Request, Response } from 'express';
import { ClothingModel } from '../models/clothing.model';
import { SurveyModel } from '../models/survey.model';

const router = express.Router();

/******************************
 * Clothing APIs
 **************************** */
// Get clothing by ID
router.get('/:clothing_id', async (req: Request, res: Response) => {
    try {
        const data = await ClothingModel.findOne({ id: req.params.clothing_id }).exec();
        res.json(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

// Get all clothing
// TODO: ADD PAGINATION
router.get('/', async (req: Request, res: Response) => {
    try {
        let data;
        let userId;
        let boundaryId;
        if (req.query.userId) { userId = req.query.userId }
        if (req.query.boundaryId) { boundaryId = req.query.boundaryId }
        if (userId) {
            const sr = await SurveyModel.findOne({ userId: userId }).exec();
            data = await ClothingModel.find().limit(10);
        } else {
            if (boundaryId) {
                data = await ClothingModel.find({ _id: { $lt: boundaryId } }).sort({ _id: -1 }).limit(10);
            } else {
                data = await ClothingModel.find().sort({ _id: -1 }).limit(10);
            }
        }
        res.json(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

export default router;
