"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.post('/sum', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    if (a > 100000 || b > 100000) {
        return res.status(422).json({
            message: "Sorry we don't support this large number operations",
        });
    }
    console.log(a, b);
    const ans = a + b;
    // create(a,b,ans,'sum');
    res.status(200).json({ result: ans });
});
exports.app.post('/multiply', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    if (a > 100000 || b > 100000) {
        return res.status(422).json({
            message: "Sorry we don't support this large number operations",
        });
    }
    console.log(a, b);
    const ans = a * b;
    // create(a, b, ans,'multiply')
    res.status(200).json({
        result: ans
    });
});
