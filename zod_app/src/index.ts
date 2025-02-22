import express from 'express';
import { z } from 'zod';

export const app = express();

const suminput= z.object({
    a:z.number(),
    b:z.number()
})

app.use(express.json())

app.post('/sum',(req,res):any=>{
    const reqdata = suminput.safeParse(req.body);
    // console.log(`a: ${req.body.a} b: ${req.body.b}`)
    if(!reqdata.success){
        return res.status(411).json({
            ans : 'Provide correct numerical values'
        })
    }

    const sum = reqdata.data.a+reqdata.data.b

    res.status(200).json({
        answer : sum
    })
})

app.get('/sum',(req,res):any=>{
    const reqdata=suminput.safeParse({
        a : Number(req.headers['a']),
        b : Number(req.headers['b'])
    })

    if (!reqdata.success) {
        return res.status(411).json({
            ans: 'Provide correct numerical values'
        })
    }

    const sum = reqdata.data.a + reqdata.data.b

    res.status(200).json({
        answer: sum
    })
})