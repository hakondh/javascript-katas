import { elasticize } from "./index";

describe('Test elastic-words', () => {
    test('elasticize("ANNA") ➞ "ANNNNA"', () => {
        const word = "ANNA"
        const expected = "ANNNNA"
        expect(elasticize(word)).toBe(expected)
    })

    test('elasticize("KAYAK") ➞ "KAAYYYAAK"', () => {
        const word = "KAYAK"
        const expected = "KAAYYYAAK"
        expect(elasticize(word)).toBe(expected)
    })
})