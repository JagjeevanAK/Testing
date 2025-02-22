"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
exports.app = (0, express_1.default)();
const suminput = zod_1.z.object({
    a: zod_1.z.number(),
    b: zod_1.z.number()
});
exports.app.use(express_1.default.json());
exports.app.post('/sum', (req, res) => {
    const reqdata = suminput.safeParse(req.body);
    // console.log(`a: ${req.body.a} b: ${req.body.b}`)
    if (!reqdata.success) {
        return res.status(411).json({
            ans: 'Provide correct numerical values'
        });
    }
    const sum = reqdata.data.a + reqdata.data.b;
    res.status(200).json({
        answer: sum
    });
});
exports.app.get('/sum', (req, res) => {
    const reqdata = suminput.safeParse({
        a: Number(req.headers['a']),
        b: Number(req.headers['b'])
    });
    if (!reqdata.success) {
        return res.status(411).json({
            ans: 'Provide correct numerical values'
        });
    }
    const sum = reqdata.data.a + reqdata.data.b;
    res.status(200).json({
        answer: sum
    });
});
