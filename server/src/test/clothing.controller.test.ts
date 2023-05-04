import express from 'express';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import { Response } from 'superagent';
import { request, expect } from 'chai';

describe('Clothing Controller', () => {
    describe('Route GET /clothing', () => {
        it('Should GET to /clothing', async () => {
            const res: Response = await request('http://0.0.0.0:8080').get('/clothing');
            expect(res).to.have.status(200);
            expect(res.body.results).to.be.a('array');
        });
    });
});