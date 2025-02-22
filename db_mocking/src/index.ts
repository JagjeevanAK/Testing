import { prismaClient } from "./db";
import express from 'express';
import { RequestType } from '@prisma/client';

export const app = express();

app.use(express.json())

app.post('/sum',async (req,res): Promise<any>=>{
    const a = req.body.a;
    const b = req.body.b;

    if(a > 100000 || b > 100000){
        return res.status(422).json({
            message: "Sorry we don't support this large number operations",
        })
    }
    console.log(a, b);
    const ans = a + b;

    const request =await prismaClient.request.create({
        data: {
            a: a,
            b: b,
            answer: ans,
            type: RequestType.sum
        }
    })
    res.status(200).json({ result: ans, id: request.a });
})

app.post('/multiply',async (req,res): Promise<any>=>{
    const a = req.body.a;
    const b = req.body.b;

    if (a > 100000 || b > 100000) {
        return res.status(422).json({
            message: "Sorry we don't support this large number operations",
        })
    }
    console.log(a,b)
    const ans = a * b;
    await prismaClient.request.create({
        data: {
            a: a,
            b: b,
            answer: ans,
            type: RequestType.multiply
        }
    })
    res.status(200).json({
        result: ans
    });
})