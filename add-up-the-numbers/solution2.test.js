'use strict';

import { addUp } from './solution2.js';

describe('Basic tests solution2', () => {
    it('should return 10 when we pass 4', () => {
        expect(addUp(4)).toEqual(10);
    });
    it('should return 91 when we pass 13', () => {
        expect(addUp(13)).toEqual(91);
    });
    it('should return 180300 when we pass 600', () => {
        expect(addUp(600)).toEqual(180300);
    });
    it('should return 1 when we pass 1', () => {
        expect(addUp(1)).toEqual(1);
    });
    it('should return 20100 when we pass 200', () => {
        expect(addUp(200)).toEqual(20100);
    });
    it('should return 80200 when we pass 400', () => {
        expect(addUp(400)).toEqual(80200);
    });
    it('should return 320400 when we pass 800', () => {
        expect(addUp(800)).toEqual(320400);
    });
    it('should return 500500 when we pass 1000', () => {
        expect(addUp(1000)).toEqual(500500);
    });
});
