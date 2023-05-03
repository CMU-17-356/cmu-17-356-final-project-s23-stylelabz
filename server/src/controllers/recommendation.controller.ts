import express, { Request, Response } from 'express';
import { ClothingModel } from '../models/clothing.model';
import { RecommendationModel } from '../models/recommendation.model';
import { SwipeModel } from '../models/swipe.model';

const router = express.Router();

/******************************
 * Recommendation APIs
 **************************** */

// Get recommendations
router.get('/:userId', async (req: Request, res: Response) => {
    try {
        // extract userId
        const userId = req.params.userId;

        // get swipes by userId
        const userSwipes = await SwipeModel.findOne({ userId: userId }).exec();
        
        // if swipes.likes is not empty
        if (userSwipes) {
            // get all recommendations by liked clothingId
            let recommendations: string[] = [];
            for (const aId of userSwipes.likes) {
                const rDoc = await RecommendationModel.findOne({ id: aId }).exec();
                if (rDoc) {
                    recommendations = [ ...recommendations, ...rDoc.recommendations];
                }
            }
            // deduplicate recommendations
            recommendations = Array.from(new Set(recommendations));
            // get first 10 articles by articleId
            const recommendedClothing = await ClothingModel.find({ id: { $in: recommendations.slice(0, 10) }});
            // return
            console.log("Fetched recommendations", recommendedClothing);
            res.json({ recommendations: recommendedClothing });
        } else {
            // return empty FOR NOW
            res.json({ recommendations: [] })
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

export default router;
