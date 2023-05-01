import { Schema } from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface SurveyQuestion {
    id: number,
    category: string,
    text: string
}
export interface Survey {
    questions: [SurveyQuestion]
}

// 2. Create a Schema corresponding to the document interface.
export const SurveySchema = new Schema<Survey>({
    questions: [{
        id: { type: Number, required: true },
        category: { type: String, enum: ['style', 'color_family', 'price'] },
        text: { type: String, required: true }
    }]
});

// 3. Create a Model.
export const SurveyModel = mongoose.model('Survey', SurveySchema); 