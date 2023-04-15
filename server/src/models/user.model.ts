import { Schema} from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface UserInterface{
    username: string,
    name :{
        first_name: string,
        second_name: string,
        last_name : string
    },
    gender: string,
    DOB: Date,
    email: string,
}

// 2. Create a Schema corresponding to the document interface.
const UserSchema = new Schema<UserInterface>({
    username :{ type: String, required: true },
    name : {
        first_name: {type:String, required :true},
        second_name: String,
        last_name : {type:String,}
    },
    gender: {type: String , enum : ['Male','Female']},
    DOB: Date,
    email: {type: String,},
});

// 3. Create a Model.
export const User = mongoose.model('User', UserSchema);
