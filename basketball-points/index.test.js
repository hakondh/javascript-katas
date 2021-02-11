import { getPoints, getTwoPointSum, getThreePointSum } from './index.js';

describe('Get total points', () => {
    test('points(1, 1) ➞ 5', () => {
        const twoP = 1;
        const threeP = 1;
        const expected = 5;

        expect(getPoints(twoP, threeP)).toBe(expected);
    });
    test('points(7, 5) ➞ 29', () => {
        const twoP = 7;
        const threeP = 5;
        const expected = 29;

        expect(getPoints(twoP, threeP)).toBe(expected);
    });
})
describe('Get two-pointers sum ', () => {
    test('getTwoPointSum(1) ➞ 2', () => {
        const twoP = 1;
        const expected = 2;

        expect(getPoints(twoP)).toBe(expected);
    });
})
describe('Get three-pointers sum ', () => {
    test('getThreePointSum(1) ➞ 3', () => {
        const twoP = 1;
        const expected = 3;

        expect(getPoints(twoP)).toBe(expected);
    });
})
