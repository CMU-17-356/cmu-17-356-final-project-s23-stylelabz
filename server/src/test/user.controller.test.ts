import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import { Response } from 'superagent';
import { request, expect } from 'chai';

describe('User Controller', () => {
    const sample_user = {
        "username": "Alex124",
        "first_name": "Alex",
        "last_name": "S",
        "gender": 'M',
        "email": "alex123@email.com"
    };
    describe('Route POST /user/register', () => {
        it('Should create new user in /user/register', async () => {
            const res: Response = await request('http://0.0.0.0:8080')
                .post('/user/register')
                .send(sample_user);
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');
        });
    });

    describe('Route POST /user/login', () => {
        it('Should POST to /user/login', async () => {
            const res: Response = await request('http://0.0.0.0:8080')
                .post('/user/login').send({ username: "Alex123" });
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');
        });
    });
});