import { sum } from '../index';
import { it, describe, expect } from '@jest/globals';

describe('sun',()=>{
    it('should add two +ve numbers',()=>{
        expect(sum(1,2)).toBe(3);
    })
    it('should add 2 -ve numbers',()=>{
        expect(sum(-2,-3)).toBe(-5);
    })
    it('should add 2 0s',()=>{
        expect(sum(0,0)).toBe(0);
    })
})