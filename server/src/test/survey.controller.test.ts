
import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import { Response } from 'superagent';
import { request, expect } from 'chai';

describe('Survey Controller', () => {
    const surveySample = {
        userId: "6452b3b7aeddbdebc16cbca7",
        response: {
            style: ["Casual"],
            pattern: ["Checked"],
            color: ["Navy Blue", "Blue", "Green"],
            price: [10, 25]
        }
    }
    describe('Route Post /survey', () => {
        it('Should create new survey in /survey', async () => {
            const res: Response = await request('http://0.0.0.0:8080').post('/survey')
                .send(surveySample);
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');
        });
    });

    describe('Route GET /survey/:user_id', () => {
        it('Should GET to /survey/:user_id', async () => {
            const res: Response = await request('http://0.0.0.0:8080')
                .get('/survey/' + "644f2887c3c5c09973a40a78");
            expect(res).to.have.status(200);
        });
    });
});