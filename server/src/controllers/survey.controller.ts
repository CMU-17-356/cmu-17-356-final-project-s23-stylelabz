import express from 'express';
import { SurveyModel } from '../models/survey.model';

const router = express.Router();

/******************************
 * Survey APIs
 **************************** */
// Create new survey questions
router.post('/', async (req, res) => {
    const data = new SurveyModel({
        questions: req.body.questions
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


// Get survey questions
// servey id: 64516fbaa4b80a9c515b2169
router.get('/:servey_id', async (req, res) => {
    try {
        const data = await SurveyModel.find({ _id: req.params.servey_id});
        res.json(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});


// get list of clothing styles
router.get('/styles', async (req, res) => {
        const data = { "styles":
                ["Parisian", "Athleisure", "Classic", "Streetwear", "Business Casual",
                    "Retro", "Mnimialist", "Vintage", "Grunge", "Chic", "Boho", "Preppy",
                    "Punk", "Gothic", "Ethnic", "Kawaii"]};
        res.json(data);
});

// get list of clothing patterns
router.get('/patterns', async (req, res) => {
    const data = { "patterns":
            ['solid', 'floral', 'spotted', 'plaid', 'striped', 'graphics']};
    res.json(data);
});

export default router;
