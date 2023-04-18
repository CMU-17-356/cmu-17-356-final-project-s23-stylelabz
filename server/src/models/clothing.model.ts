import { Schema } from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface Clothing {
    type: string,
    pattern: string,
    sizes: [string],
    color: string,
    price: number,
    link: string
}

// 2. Create a Schema corresponding to the document interface.
export const ClothingSchema = new Schema<Clothing>({
    type: {
        type: String,
        required: true,
        enum: ['activewear', 'blazers', 'coats', 'denim', 'jackets', 'jeans', 'knitwear', 'pants',
            'polo shirts', 'shirts', 'shorts', 'suits', 'tshirts', 'other']
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
    price: { type: Number, },
    link: { type: String, required: true, }
});

// 3. Create a Model.
export const ClothingModel = mongoose.model('Clothing', ClothingSchema);
