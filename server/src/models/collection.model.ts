import { Schema } from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface Collection {
    userId: Schema.Types.ObjectId,
    clothingId: Schema.Types.ObjectId,
    response: string
}

// 2. Create a Schema corresponding to the document interface.
export const CollectionSchema = new Schema<Collection>({
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    clothingId: { type: Schema.Types.ObjectId, required: true, ref: 'Clothing' },
    response: { type: String, required: true, enum: ['disliked', 'liked', 'superliked'] }
});

// 3. Create a Model.
export const CollectionModel = mongoose.model('Collection', CollectionSchema);
