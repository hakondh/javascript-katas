import { countBoomerangs } from "./index.js";

describe('Test countBoomerangs', () => {
    test('countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2', () => {
        const arr = [9, 5, 9, 5, 1, 1, 1];
        const expected = 2;

        expect(countBoomerangs(arr)).toBe(expected);
    });

    test('countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1', () => {
        const arr = [5, 6, 6, 7, 6, 3, 9];
        const expected = 1;

        expect(countBoomerangs(arr)).toBe(expected);
    });

    test('countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0', () => {
        const arr = [4, 4, 4, 9, 9, 9, 9];
        const expected = 0;

        expect(countBoomerangs(arr)).toBe(expected);
    });

    test('countBoomerangs([1, 7, 1, 7, 1, 7, 1]) ➞ 5', () => {
        const arr = [1, 7, 1, 7, 1, 7, 1];
        const expected = 5;

        expect(countBoomerangs(arr)).toBe(expected);
    });
})