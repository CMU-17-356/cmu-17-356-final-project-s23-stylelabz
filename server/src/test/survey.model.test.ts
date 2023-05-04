import { SurveyModel } from "../models/survey.model";
import { expect } from 'chai';

const sample_survey = new SurveyModel({
    userId: "644f2887c3c5c09973a40a78",
    response: {
        style:["Casual"],
        pattern:["Checked"],
        color:["Navy Blue","Blue","Green"],
        price:[10,25]
    }
});

// Test if object should have userId
test('Survey has  id', () => {
    // Example Referencing
    expect(sample_survey).to.have.property('id');
});
