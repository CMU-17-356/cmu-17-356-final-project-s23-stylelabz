import {Schema} from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface UserCollectionInterface {
    userReference: Schema.Types.ObjectId,
    collectionReference: Schema.Types.ObjectId,
    liking: boolean,
    superLike: boolean,

}

// 2. Create a Schema corresponding to the document interface.
const UserCollectionSchema = new Schema<UserCollectionInterface>({
    userReference: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
    collectionReference: {type: Schema.Types.ObjectId, required: true, ref: 'Collection'},
    liking: {type: Boolean,  required: true,},
    superLike: {type: Boolean,  required: false,},
});

// 3. Create a Model.
export const UserCollection = mongoose.model('UserCollection', UserCollectionSchema);
