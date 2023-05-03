import express from 'express';
import { SwipeModel } from '../models/swipe.model';

const router = express.Router();

/******************************
 * Collection APIs
 **************************** */
// Create user's Collection
router.post('/', async (req, res) => {
    try {
        if (req.body.userId && req.body.clothingId && req.body.swipe) {
            const userId = req.body.userId;
            const clothingId = req.body.clothingId;
            const swipe = req.body.swipe;

            let update;

            if (swipe === 'like') {
                update = { $push: { likes: clothingId } }
            } else if (swipe === 'superlike') {
                update = { $push: { superlikes: clothingId } }
            } else {
                update = { $push: { dislikes: clothingId } }
            }

            SwipeModel
                .updateOne({ userId: userId }, update)
                .then(() => res.sendStatus(200))
                .catch(() => res.sendStatus(500));

        } else {
            res.status(400).json({ message: 'Bad Request' });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

export default router;
