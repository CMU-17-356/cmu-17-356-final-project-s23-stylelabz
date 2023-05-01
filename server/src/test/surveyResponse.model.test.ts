import {SurveyResponseModel} from "../models/surveyResponse.model";
import { expect } from 'chai';
import {Schema} from "mongoose";

const sample_surveyResponse= new SurveyResponseModel({
    userId: '12jdjjhf65883jdndnnmm',
    surveyId: '008jhf6xxx6sgdnnmm',
    response: [{answer: 'activewear'}],
    date: '2023-04-19T00:00:00.000Z'
    }
);
// Test if object should have userId
test('Survey Response has  userId', () => {
    // Example Referencing
    expect(sample_surveyResponse).to.have.property('userId');
});
