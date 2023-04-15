import { Schema} from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface UserSurveyResponseInterface{
    response:[ {
        reference_question: Schema.Types.ObjectId,
        answer: string,
        answerMaxValue: number,
        answerMinValue: number
    }]
    answerDate: Date,
}

// 2. Create a Schema corresponding to the document interface.
const UserSurveyResponseSchema = new Schema<UserSurveyResponseInterface>({
    response:[{
        reference_question: {type: Schema.Types.ObjectId, ref: 'Survey'},
        answer: String,
        answerMaxValue: Number,
        answerMinValue: Number
    }],
    answerDate: Date,
});

// 3. Create a Model.
export const UserSurveyResponse = mongoose.model('UserSurveyResponse', UserSurveyResponseSchema);
