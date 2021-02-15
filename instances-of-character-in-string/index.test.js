import { charCount } from './index.js';

describe('Count instances of a Character in a String', () => {
    test('charCount("a", "edabit") ➞1', () => {
        const c = 'a';
        const str = 'edabit';
        const expected = 1;

        expect(charCount(c, str)).toBe(expected);
    });
    test('charCount("c", "Chamber of secrets") ➞1', () => {
        const c = 'c';
        const str = 'Chamber of secrets';
        const expected = 1;

        expect(charCount(c, str)).toBe(expected);
    });
    test('charCount("b", "big fat bubble") ➞4', () => {
        const c = 'b';
        const str = 'big fat bubble';
        const expected = 4;

        expect(charCount(c, str)).toBe(expected);
    });
});