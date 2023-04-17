import { Schema } from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface UserInterface {
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    gender: string,
    DOB: Date,
    email: string,
}

// 2. Create a Schema corresponding to the document interface.
const UserSchema = new Schema<UserInterface>({
    username: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, enum: ['M', 'F'] },
    DOB: { type: Date, required: true },
    email: { type: String, required: false },
});

// 3. Create a Model.
export const User = mongoose.model('User', UserSchema);
