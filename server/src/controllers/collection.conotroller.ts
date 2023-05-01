import express from 'express';
import { CollectionModel } from '../models/collection.model';

const router = express.Router();

/******************************
 * Collection APIs
 **************************** */
// Create user's Collection
router.post('/', async (req, res) => {
    const data = new CollectionModel({
        userId: req.body.userId,
        clothingId: req.body.clothingId,
        response: req.body.response,
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


// Get collection by ID
router.get('/:collection_id', async (req, res) => {
    try {
        const data = await CollectionModel.findOne({ _id: req.params.collection_id });
        res.json(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

// Get all user's collection
router.get('/:user_id', async (req, res) => {
    const userId = req.params.user_id;
    try {
        const data = await CollectionModel.find({ userId: userId }).where('response')
            .all(['liked', 'superliked']);
        res.json(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

export default router;
