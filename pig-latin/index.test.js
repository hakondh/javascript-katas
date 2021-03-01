import { convertToPigLatin } from "./index";

describe('Test convertToPigLatin', () => {
    test('convertToPigLatin("this is pig latin") ➞ "isthay isway igpay atinlay"', () => {
        const text = 'this is pig latin'
        const expected = 'isthay isway igpay atinlay'

        expect(convertToPigLatin(text)).toBe(expected)
    })

    test('convertToPigLatin("wall street journal") ➞ "allway eetstray ournaljay"', () => {
        const text = 'wall street journal'
        const expected = 'allway eetstray ournaljay'

        expect(convertToPigLatin(text)).toBe(expected)
    })
})