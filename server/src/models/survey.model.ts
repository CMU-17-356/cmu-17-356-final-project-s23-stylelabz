import { Schema } from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface SurveyInterface {
    userId: Schema.Types.ObjectId,
    response: {
        style: string[],
        pattern: string[],
        color: string[],
        price: number[]
    }
}

// 2. Create a Schema corresponding to the document interface.
const SurveySchema = new Schema<SurveyInterface>({
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    response: {
        style: [{ type: String, enum: ['Parisian', 'Athleisure', 'Classic', 'Streetwear', 'Business Casual', 'Retro', 'Minimalist', 'Vintage', 'Grunge', 'Chic', 'Boho', 'Preppy', 'Punk', 'Gothic', 'Ethnic'] }],
        pattern: [{  type: String, enum: ['Solid', 'Floral', 'Spotted', 'Plaid', 'Striped', 'Graphic'] }],
        color: [{ type: String, enum: ['Red', 'Yellow', 'Green', 'Cyan', 'Blue', 'Purple', 'Brown', 'White', 'Gray', 'Black', 'Multi'] }],
        price: [Number]
    },
});

// 3. Create a Model.
export const SurveyModel = mongoose.model('survey', SurveySchema);