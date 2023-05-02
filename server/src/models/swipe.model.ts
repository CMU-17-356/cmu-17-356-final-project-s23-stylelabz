import { Schema } from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface SwipeHistory {
    userId: Schema.Types.ObjectId,
    likes: Schema.Types.ObjectId[],
    dislikes: Schema.Types.ObjectId[],
    superlikes: Schema.Types.ObjectId[]
}

// 2. Create a Schema corresponding to the document interface.
export const SwipeSchema = new Schema<SwipeHistory>({
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    likes: [{ type: Schema.Types.ObjectId, required: true, ref: 'Article' }],
    dislikes: [{ type: Schema.Types.ObjectId, required: true, ref: 'Article' }],
    superlikes: [{ type: Schema.Types.ObjectId, required: true, ref: 'Article' }]
});

// 3. Create a Model.
export const SwipeModel = mongoose.model('Swipe', SwipeSchema);
