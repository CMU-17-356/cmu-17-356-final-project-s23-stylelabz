import { Schema } from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface SurveyResponseInterface {
    userId: Schema.Types.ObjectId,
    surveyId: Schema.Types.ObjectId,
    response: [{
        question_id: Schema.Types.ObjectId,
        answer?: string,
        answerMaxValue?: number,
        answerMinValue?: number
    }]
    date: Date,
}

// 2. Create a Schema corresponding to the document interface.
const SurveyResponseSchema = new Schema<SurveyResponseInterface>({
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    surveyId: { type: Schema.Types.ObjectId, required: true, ref: 'Survey' },
    response: [{
        questionId: { type: Schema.Types.ObjectId },
        answer: String,
        answerMaxValue: Number,
        answerMinValue: Number
    }],
    date: Date,
});

// 3. Create a Model.
export const SurveyResponseModel = mongoose.model('SurveyResponse', SurveyResponseSchema);
