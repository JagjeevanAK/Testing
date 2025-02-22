import express from "express";

export const app = express()

app.use(express.json())

app.get('/', (req,res)=>{
    res.json('Hi');
})
app.post('/sum', (req,res)=>{
    const a=req.body.a;
    const b=req.body.b;
    const sum = a+b;
    res.json({sum});
})
app.post('/multiply', (req,res):any=>{
    const a:number =req.body.a;
    const b:number =req.body.b;

    if (a > 100000 || b > 100000) {
        return res.status(422).json({answer: "Value of a or b is bigger so request can't be processed "});
    }

    const product = a*b;
    res.json({product});
})
