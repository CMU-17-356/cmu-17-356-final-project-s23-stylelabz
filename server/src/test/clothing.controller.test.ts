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
            expect(res.body).to.be.a('array');
        });
    });

    describe('Route GET /clothing/:clothing_id', () => {
        it('Should GET to /clothing/:clothing_id', async () => {
            //create new clothing:
            const newclothing = await request('http://0.0.0.0:8080').post('/clothing')
                .send({
                    type: 'shirts',
                    pattern: 'floral',
                    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL'],
                    color: 'Navy',
                    colorScheme: 'Blue Family',
                    colorPalette: 'Dark',
                    category: 'Women',
                    price: 100,
                    link: 'test',
                });
            const clothingid = newclothing.body._id;
            const res: Response = await request('http://0.0.0.0:8080')
               .get('/clothing/'+clothingid);
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');
            expect(res.body._id).to.equals(newclothing.body._id);
        });
    });

    describe('Route Post /clothing', () => {
        it('Should create new clothing in /clothing', async () => {
            const res: Response = await request('http://0.0.0.0:8080').post('/clothing')
                .send({
                    type: 'shirts',
                    pattern: 'floral',
                    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL'],
                    color: 'Navy',
                    colorScheme: 'Blue Family',
                    colorPalette: 'Dark',
                    category: 'Women',
                    price: 100,
                    link: 'test',
                });
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');
        });
    });
});