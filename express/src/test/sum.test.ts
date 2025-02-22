import { it, describe, expect } from '@jest/globals'
import { app } from '../index'
import  request from 'supertest'

describe('sum',()=>{
    it('it should add 2 +ve numbers',async () => {
        const res = await request(app)
            .post('/sum')
            .send({
            a:1,
            b:2
        });
        expect(res.body.sum).toBe(3);
        expect(res.statusCode).toBe(200);
    })
})

describe('multiply',()=>{
    it('should return multiplication of 2 numbers',async () => {
        const res = await request(app).post('/multiply').send({a:1, b:3});
        expect(res.body.product).toBe(3);
    })

})