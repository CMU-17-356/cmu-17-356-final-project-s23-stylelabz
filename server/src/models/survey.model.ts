import { Schema} from 'mongoose';
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface SurveyInterface{
    questionSerialNo: number,
    questionCategory: string
    questionText: string,
}

// 2. Create a Schema corresponding to the document interface.
const SurveySchema = new Schema<SurveyInterface>({
    questionSerialNo :{ type: Number, required: true },
    questionCategory: {type: String , enum : ['Style','ColorFamily', 'Price']},
    questionText: {type: String,},
});

// 3. Create a Model.
export const Survey = mongoose.model('Survey', SurveySchema);
