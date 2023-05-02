import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import { Response } from 'superagent';
import { request, expect } from 'chai';

describe('Survey Controller', () => {
    const surveyResponseSample= {
        userId: "644f2887c3c5c09973a40a78",
        surveyId: "644c7ce3141939d5a76234d2",
        response: [
            {
                question_id: "644c7ce3141939d5a76234d3",
                answer: "Classic"
            },
            {
                question_id: "644c7ce3141939d5a76234d4",
                answer: "spotted"
            },
            {
                question_id: "644c7ce3141939d5a76234d5",
                answer: "Gray Family"
            },
            {
                question_id: "644c7ce3141939d5a76234d6",
                answerMaxValue: 100,
                answerMinValue: 20
            }],
        date:  new Date()
       };
    describe('Route Post /survey', () => {
        it('Should create new response in /surveyResponse', async () => {
            const res: Response = await request('http://0.0.0.0:8080').post('/surveyResponse')
                .send(surveyResponseSample);
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');
            console.log(res.body);
        });
    });

    describe('Route GET /surveyResponse/:user_id', () => {
        it('Should GET to /surveyResponse/:user_id', async () => {
            const res: Response = await request('http://0.0.0.0:8080')
                .get('/surveyResponse/'+"644f2887c3c5c09973a40a78");
            expect(res).to.have.status(200);
            console.log(res.body);
            expect(res.body).to.be.a('array');
        });
    });
});