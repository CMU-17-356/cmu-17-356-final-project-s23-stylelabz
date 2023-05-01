import express from 'express';
import { CollectionModel } from '../models/collection.model';
import { connect_db, disconnet_db } from '../database/connection';

const router = express.Router();

/******************************
 * Collection APIs
 **************************** */
// Create user's Collection
router.post('/', async (req, res) => {
    connect_db();
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
    // disconnet_db();
});


// Get collection by ID
router.get('/:collection_id', async (req, res) => {
    connect_db();
    try {
        const data = await CollectionModel.findOne({ _id: req.params.collection_id });
        res.json(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
    // disconnet_db();
});

// Get all user's collection
router.get('/userCollection/:user_id', async (req, res) => {
    connect_db();
    const userId = req.params.user_id;
    try {
        const data = await CollectionModel.find({ userId: userId })
            .where('response')
            .in([ 'liked','superliked']);
        res.json(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
    // disconnet_db();
});

export default router;
