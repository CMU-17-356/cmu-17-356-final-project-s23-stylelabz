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
router.get('/', async (req: Request, res: Response) => {
    try {
        let data;
        let userId;
        let boundaryId;
        if (req.query.userId) { userId = req.query.userId }
        if (req.query.boundaryId) { boundaryId = req.query.boundaryId }
        if (userId) {
            const sr = await SurveyModel.findOne({ userId: userId }).exec();
            if (sr) {
                console.log('Survey found', sr);
                // TODO
                const query: {[k: string]: any} = {};

                const preferredStyles = sr.response.style;
                const preferredPatterns = sr.response.pattern;
                const preferredColors = sr.response.color;
                const preferredPriceRange = sr.response.price;

                if (preferredStyles) { query.usage = { $in: preferredStyles } }
                if (preferredPatterns) { query.pattern = { $in: preferredPatterns } }
                if (preferredColors) { query.color = { $in: preferredColors } }
                if (preferredPriceRange) { query.price = { $gte: preferredPriceRange[0], $lte: preferredPriceRange[1] } }

                console.log(query);

                data = await ClothingModel.find(query).limit(10);
            } else {
                data = await ClothingModel.find().limit(10);
            }
        } else {
            if (boundaryId) {
                data = await ClothingModel.find({ _id: { $lt: boundaryId } }).sort({ _id: -1 }).limit(10);
            } else {
                data = await ClothingModel.find().sort({ _id: -1 }).limit(10);
            }
        }
        res.json({
            boundaryId: data.slice(-1)[0]._id,
            results: data 
        });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

export default router;
