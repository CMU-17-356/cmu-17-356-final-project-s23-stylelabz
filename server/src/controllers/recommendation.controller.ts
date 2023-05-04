import express, { Request, Response } from 'express';
import { ClothingModel } from '../models/clothing.model';
import { RecommendationModel } from '../models/recommendation.model';
import { SwipeModel } from '../models/swipe.model';
import { SurveyModel } from '../models/survey.model';

const router = express.Router();

/******************************
 * Recommendation APIs
 **************************** */

// Get recommendations
router.get('/', async (req: Request, res: Response) => {
    try {
        // extract userId
        let userId;
        if (req.query.userId) { userId = req.query.userId }

        let boundaryId;
        if (req.query.boundaryId) { boundaryId = req.query.boundaryId }

        // get swipes by userId
        if (userId) {
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
                let recommendedClothing;
    
                if (boundaryId) {
                    recommendedClothing = await ClothingModel.find({ _id: { $lt: boundaryId }, id: { $in: recommendations }}).sort({ _id: -1 }).limit(10);
                } else {
                    recommendedClothing = await ClothingModel.find({ id: { $in: recommendations }}).limit(10);
                }
                // return
                res.json({ 
                    boundaryId: recommendedClothing.length > 0 ? recommendedClothing.slice(-1)[0]._id : null,
                    recommendations: recommendedClothing 
                });
            } else {
                let recommendedClothing;
    
                const sr = await SurveyModel.findOne({ userId: userId }).exec();
                if (sr) {
                    const query: {[k: string]: any} = {};
    
                    const preferredStyles = sr.response.style;
                    const preferredPatterns = sr.response.pattern;
                    const preferredColors = sr.response.color;
                    const preferredPriceRange = sr.response.price;
    
                    if (preferredStyles) { query.usage = { $in: preferredStyles } }
                    if (preferredPatterns) { query.pattern = { $in: preferredPatterns } }
                    if (preferredColors) { query.color = { $in: preferredColors } }
                    if (preferredPriceRange) { query.price = { $gte: preferredPriceRange[0], $lte: preferredPriceRange[1] } }
    
                    if (boundaryId) { query._id = { $lt: boundaryId } }
    
                    recommendedClothing = await ClothingModel.find(query).limit(10);
                    res.json({ 
                        boundaryId: recommendedClothing.length > 0 ? recommendedClothing.slice(-1)[0]._id : null,
                        recommendations: recommendedClothing 
                    });
                } else {
                    if (boundaryId) {
                        recommendedClothing = await ClothingModel.find({ _id: { $lt: boundaryId } }).limit(10);
                    } else {
                        recommendedClothing = await ClothingModel.find().limit(10);
                    }
                    res.json({ 
                        boundaryId: recommendedClothing.length > 0 ? recommendedClothing.slice(-1)[0]._id : null,
                        recommendations: recommendedClothing 
                    });
                }
            }
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
});

export default router;
