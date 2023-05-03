
import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import { Response } from 'superagent';
import { request, expect } from 'chai';

describe('Survey Controller', () => {
    const surveySample= {questions:[{
            "id": 1,
            "category": "style",
            "text": "What clothing styles do you like (select all that apply)?"
        },
        {
            "id": 2,
            "category": "pattern",
            "text": "What patterns do you like your clothing to have (select all that apply)?"
        }]
       };
    describe('Route Post /survey', () => {
        it('Should create new survey in /survey', async () => {
            const res: Response = await request('http://0.0.0.0:8080').post('/survey')
                .send(surveySample);
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');
            console.log(res.body);
        });
    });

    describe('Route GET /survey/:servey_id', () => {
        it('Should GET to /survey/:servey_id', async () => {
            const res: Response = await request('http://0.0.0.0:8080')
                .get('/survey/'+"644c7ce3141939d5a76234d2");
            expect(res).to.have.status(200);
            console.log(res.body);
            expect(res.body).to.be.a('array');
        });
    });
});