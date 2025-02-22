"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_1 = require("../index");
const supertest_1 = __importDefault(require("supertest"));
vitest_1.vi.mock("../db", () => {
    return {
        prismaClient: {
            request: {
                create: vitest_1.vi.fn()
            }
        }
    };
});
(0, vitest_1.describe)('GET/sum', () => {
    (0, vitest_1.it)('It should add two numbers without an error', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = yield (0, supertest_1.default)(index_1.app).get('/sum').send({
            a: 1,
            b: 2
        });
        (0, vitest_1.expect)(req.body.result).toBe(3);
        (0, vitest_1.expect)(req.statusCode).toBe(200);
    }));
    (0, vitest_1.it)('It should not add a number and a non-number', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = yield (0, supertest_1.default)(index_1.app).get('sum').send({
            a: '#',
            b: 1
        });
        (0, vitest_1.expect)(req.body.message).toBe("Sorry we don't support this large number operations");
        (0, vitest_1.expect)(req.statusCode).toBe(422);
    }));
});
(0, vitest_1.describe)('GET/multiply', () => {
    (0, vitest_1.it)('It should multiply two numbers without an error', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = yield (0, supertest_1.default)(index_1.app).get('/multiply').send({
            a: 1,
            b: 2
        });
        (0, vitest_1.expect)(req.body.result).toBe(2);
        (0, vitest_1.expect)(req.statusCode).toBe(200);
    }));
    (0, vitest_1.it)('It should not multiply a number and a non-number', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = yield (0, supertest_1.default)(index_1.app).get('multiply').send({
            a: '#',
            b: 1
        });
        (0, vitest_1.expect)(req.body.message).toBe("Sorry we don't support this large number operations");
        (0, vitest_1.expect)(req.statusCode).toBe(422);
    }));
});
