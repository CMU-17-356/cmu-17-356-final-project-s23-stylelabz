import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import { Response } from 'superagent';
import { request, expect } from 'chai';
import {UserModel} from "../models/user.model";

describe('User Controller', () => {
    const sample_user = {
        "username": "Alex123",
        "first_name": "Alex",
        "last_name": "S",
        "gender": 'M',
        "DOB": '2000-04-19T00:00:00.000Z',
    };
    describe('Route Post /user', () => {
        it('Should create new user in /user', async () => {
            const res: Response = await request('http://0.0.0.0:8080')
                .post('/user')
                .send(sample_user);
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');
            console.log(res.body);
        });
    });

    describe('Route GET /user/:user_id', () => {
        it('Should GET to /user/:user_id', async () => {
            const res: Response = await request('http://0.0.0.0:8080')
                .get('/user/'+"6450166c5ebb07a844d5854d");
            expect(res).to.have.status(200);
            console.log(res.body);
            expect(res.body).to.be.a('object');
        });
    });
});