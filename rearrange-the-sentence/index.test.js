import {rearrange} from "./index";

describe('Test rearrange', () => {
    test('rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"', () => {
        expect(rearrange('is2 Thi1s T4est 3a')).toBe('This is a Test')
    })

    test('rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"', () => {
        expect(rearrange('4of Fo1r pe6ople g3ood th5e the2')).toBe('For the good of the people')
    })

    test('rearrange(" ") ➞ ""', () => {
        expect(rearrange(' ')).toBe('')
    })
})