import {SurveyModel} from "../models/survey.model";
import { expect } from 'chai';

const sample_survey= new SurveyModel({
    id: 1,
    category: 'style',
    text: 'Which Style Do you prefer most?'
    }
    );
// Test if object should have userId
test('Survey has  id', () => {
    // Example Referencing
    expect(sample_survey).to.have.property('id');
});
