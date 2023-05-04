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
        style: [{
            type: String, enum: [
                'Casual',
                'Ethnic',
                'Formal',
                'NA',
                'Party',
                'Smart Casual',
                'Sports',
                'Travel'
            ]
        }],
        pattern: [{
            type: String, enum: [
                'Checked', 'Colourblocked',
                'Dyed', 'Embellished',
                'Lace', 'Patterned',
                'Printed', 'Satin Finish',
                'Self Design', 'Solid',
                'Striped', 'Washed',
                'Woven Design'
            ]
        }],
        color: [{
            type: String, enum: [
                'Beige', 'Black', 'Blue',
                'Brown', 'Burgundy', 'Charcoal',
                'Coffee Brown', 'Cream', 'Fluorescent Green',
                'Gold', 'Green', 'Grey',
                'Grey Melange', 'Khaki', 'Lavender',
                'Lime Green', 'Magenta', 'Maroon',
                'Mauve', 'Multi', 'Mushroom Brown',
                'Mustard', 'NA', 'Navy Blue',
                'Nude', 'Off White', 'Olive',
                'Orange', 'Peach', 'Pink',
                'Purple', 'Red', 'Rose',
                'Rust', 'Sea Green', 'Silver',
                'Skin', 'Tan', 'Taupe',
                'Teal', 'Turquoise Blue', 'White',
                'Yellow'
            ]
        }],
        price: [Number]
    },
});

// 3. Create a Model.
export const SurveyModel = mongoose.model('Survey', SurveySchema);