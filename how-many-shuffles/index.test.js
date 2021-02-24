import { countShuffles } from "./index";

describe('Test how-many-shuffles', () => {
    test('shuffleCount(8) ➞ 3', () => {
        const num = 8
        const expected = 3
        expect(countShuffles(num)).toBe(expected)
    })

    test('shuffleCount(14) ➞ 12', () => {
        const num = 14
        const expected = 12
        expect(countShuffles(num)).toBe(expected)
    })
    test('shuffleCount(52) ➞ 8', () => {
        const num = 52
        const expected = 8
        expect(countShuffles(num)).toBe(expected)
    })
})