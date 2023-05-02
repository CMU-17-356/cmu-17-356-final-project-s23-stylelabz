import express from 'express';
import { ClothingModel} from '../models/clothing.model';

const router = express.Router();

/******************************
 * Clothing APIs
 **************************** */
// Create New Cloth
router.post('/', async (req, res) => {
    const data = new ClothingModel({
        type: req.body.type,
        pattern: req.body.pattern,
        sizes: req.body.sizes,
        color: req.body.color,
        colorScheme: req.body.colorScheme,
        colorPalette: req.body.colorPalette,
        category: req.body.category,
        price: req.body.number,
        link: req.body.link
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
    // disconnet_db();
});


// Get clothing by ID
router.get('/:clothing_id', async (req, res) => {
    try {
        const data = await ClothingModel.findOne({ _id: req.params.clothing_id });
        res.json(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

// Get all clothing
// TODO: ADD PAGINATION
router.get('/', async (req, res) => {
    try {
        const data = await ClothingModel.find();
        res.json(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

// Delete clothing by ID
router.delete('/:clothing_id', async (req, res) => {
    try {
        const data = await ClothingModel.findOneAndDelete({ _id: req.params.clothing_id });
        res.json(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});
export default router;
