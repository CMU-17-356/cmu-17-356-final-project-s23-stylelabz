import express from 'express';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import { Response } from 'superagent';
import { request, expect } from 'chai';

describe('Collection Controller', () => {
    describe('Route Post /collection', () => {
        it('Should create new collection in /collection', async () => {
            const res: Response = await request('http://0.0.0.0:8080').post('/collection')
                .send({userId: "644f2887c3c5c09973a40a78",
                clothingId: "644f1739c3c5c09973a40a5f",
                response: "liked"});
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');
            console.log(res.body);
        });
    });

    describe('Route GET /collection/:user_id', () => {
        it('Should GET to /collection/:user_id', async () => {
            const res: Response = await request('http://0.0.0.0:8080')
                .get('/collection/'+"644f2887c3c5c09973a40a78");
            expect(res).to.have.status(200);
            console.log(res.body);
        });
    });
});