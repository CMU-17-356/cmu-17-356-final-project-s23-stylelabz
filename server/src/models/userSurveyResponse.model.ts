import { Schema} from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface UserSurveyResponseInterface{
    response:[{
        questionId: Schema.Types.ObjectId,
        answer?: string,
        answerMaxValue?: number,
        answerMinValue?: number
    }]
    date: Date,
}

// 2. Create a Schema corresponding to the document interface.
const UserSurveyResponseSchema = new Schema<UserSurveyResponseInterface>({
    response:[{
        questionId: {type: Schema.Types.ObjectId, ref: 'Survey'},
        answer: String,
        answerMaxValue: Number,
        answerMinValue: Number
    }],
    date: Date,
});

// 3. Create a Model.
export const UserSurveyResponse = mongoose.model('UserSurveyResponse', UserSurveyResponseSchema);
