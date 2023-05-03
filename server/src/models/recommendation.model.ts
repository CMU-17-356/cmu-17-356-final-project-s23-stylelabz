import { Schema } from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface Recommendation {
    id: string,
    recommendations: string[]
}

export const RecommendationSchema = new Schema<Recommendation>({
    id: { type: String },
    recommendations: [{ type: String }],
});

// 3. Create a Model.
export const RecommendationModel = mongoose.model('Recommendation', RecommendationSchema);
