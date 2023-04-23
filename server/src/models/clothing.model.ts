import { Schema } from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface Clothing {
    type: string,
    pattern: string,
    sizes: [string],
    color: string,
    colorScheme: [string],
    colorPalette: [string],
    price: number,
    link: string
}

// 2. Create a Schema corresponding to the document interface.
export const ClothingSchema = new Schema<Clothing>({
    type: {
        type: String,
        required: true,
        enum: ['activewear', 'blazers', 'coats', 'denim', 'jackets', 'jeans', 'knitwear', 'pants',
            'poloShirts', 'shirts', 'shorts', 'suits', 'tshirts', 'other']
    },
    pattern: { 
        type: String, 
        required: true,
        enum: ['solid', 'floral', 'spotted', 'plaid', 'striped', 'graphics']
    },
    sizes: {
        type: [{ 
            type: String, 
            required: true,
            enum: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL']
        }],
    },
    color: { type: String, },
    colorScheme:[{
        type: String,
        required: true,
        enum: ['Gray Family', 'Pink Family', 'Blue Family', 'Purple Family',
            'Red Family', 'Yellow Family', 'Orange Family']
    }],
    colorPalette:[{
        type: String,
        required: true,
        enum: ['Pastel', 'Dark', 'Bright', 'Gold', 'Summer', 'Teal', 'Neutral']
    }],
    price: { type: Number, },
    link: { type: String, required: true, }
});

// 3. Create a Model.
export const ClothingModel = mongoose.model('Clothing', ClothingSchema);
