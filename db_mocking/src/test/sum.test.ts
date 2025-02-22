import { describe, expect, it, vi } from 'vitest';
import { app } from '../index';
import request from 'supertest'
import { prismaClient } from '../__mocks__/db';

vi.mock("../db")

describe('Post/sum', ()=>{
    it('It should add two numbers without an error', async()=>{
        prismaClient.request.create.mockResolvedValue({
            id: 4,
            a: 1,
            b: 2,
            answer :3,
            type: 'sum'
        })

        vi.spyOn(prismaClient.request,'create');
        const req = await request(app).post('/sum').send({
            a:1,
            b:2
        })
        expect(prismaClient.request.create).toHaveBeenCalledWith({
            data:{
                a: 1,
                b: 2,
                answer: 3,
                type: 'sum'
            }
        })
        expect(req.body.result).toBe(3);
        expect(req.body.id).toBe(4);
        expect(req.statusCode).toBe(200);
    })
    it('It should not add 2 large numbers', async()=>{
        const req = await request(app).post('/sum').send({
            a:100000000,
            b:1
        })
        expect(req.body.message).toBe("Sorry we don't support this large number operations");
        expect(req.statusCode).toBe(422);
    })
})

describe('POST/multiply',()=>{
    it('It should multiply two numbers without an error', async()=>{
        const req = await request(app).post('/multiply').send({
            a:1,
            b:2
        })
        expect(req.body.result).toBe(2);
        expect(req.statusCode).toBe(200);
    })
    it('It should not multiply a large number', async () => {
        const req = await request(app).post('/multiply').send({
            a: 100000000,
            b: 1
        })
        expect(req.body.message).toBe("Sorry we don't support this large number operations");
        expect(req.statusCode).toBe(422);
    })
})