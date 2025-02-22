import { app } from '../index'
import { it, describe, expect } from '@jest/globals';
import request from 'supertest';

describe('GET/sum', () => {
    it('It should add two numbers 2 and 3', async () => {
        const res = await request(app).get('/sum').set({
            a: '1',
            b: '2'
        })
        expect(res.body.answer).toBe(3);
        expect(res.statusCode).toBe(200);
    })
    it('It should return an error of incorrect numerical values', async()=>{
        const res = await request(app).post('/sum').send({
            a : 'a',
            b : 2
        })
        expect(res.statusCode).toBe(411);
        expect(res.body.ans).toBe('Provide correct numerical values');
    })
})

describe('POST/sum', () => {
    it('It should add two numbers 2 and 3', async () => {
        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(res.body.answer).toBe(3);
        expect(res.statusCode).toBe(200);
    })
    it('It should return an error of incorrect numerical values', async () => {
        const res = await request(app).post('/sum').send({
            a: 'a',
            b: 2
        })
        expect(res.statusCode).toBe(411);
        expect(res.body.ans).toBe('Provide correct numerical values');
    })
})