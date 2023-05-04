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

// 3. Create a Model.
export const ClothingModel = mongoose.model('Article', ClothingSchema);
