import { Schema } from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface Clothing {
    id: string,
    price: number,
    name: string,
    variantName: string,
    brand: string,
    ageGroup: string,
    gender: string,
    color: string,
    season: string,
    usage: string,
    imgLink: string,
    category: string,
    type: string,
    description: string,
    fit: string,
    pattern: string,
    fabric: string
}

export const ClothingSchema = new Schema<Clothing>({
    id: { type: String },
    price: { type: Number },
    name: { type: String },
    variantName: { type: String },
    brand: { type: String },
    ageGroup: { type: String },
    gender: { type: String },
    color: { type: String },
    season: { type: String },
    usage: { type: String },
    imgLink: { type: String },
    category: { type: String },
    type: { type: String },
    description: { type: String },
    fit: { type: String },
    pattern: { type: String },
    fabric: { type: String }
});

// 2. Create a Schema corresponding to the document interface.
// export const ClothingSchema = new Schema<Clothing>({
//     type: {
//         type: String,
//         required: true,
//         enum: ['activewear', 'blazers', 'coats', 'denim', 'jackets', 'jeans', 'knitwear', 'pants',
//             'polo shirts', 'shirts', 'shorts', 'suits', 'tshirts', 'other']
//     },
//     pattern: { 
//         type: String, 
//         required: true,
//         enum: ['solid', 'floral', 'spotted', 'plaid', 'striped', 'graphics']
//     },
//     sizes: {
//         type: [{ 
//             type: String, 
//             required: true,
//             enum: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL']
//         }],
//     },
//     color: { type: String, },
//     price: { type: Number, },
//     link: { type: String, required: true, }
// });

// 3. Create a Model.
export const ClothingModel = mongoose.model('Article', ClothingSchema);
