import { getResult } from "./index.js";

describe('Test getResult', () => {
    test('getResult([["O", "O", "O"],["O", "X", "X"],["E", "X", "X"]]) ➞ "O"', () => {
        expect(getResult([["O", "O", "O"],["O", "X", "X"],["E", "X", "X"]])).toBe("O")
    })

    test('getResult([["X", "O", "X"],["O", "X",  "O"],["O", "X",  "X"]]) ➞ "X"', () => {
        expect(getResult([["X", "O", "X"],["O", "X",  "O"],["O", "X",  "X"]])).toBe("X")
    })

    test('getResult([["X", "X", "O"],["O", "O", "X"],["X", "X", "O"]]) ➞ "Draw"', () => {
        expect(getResult([["X", "X", "O"],["O", "O", "X"],["X", "X", "O"]])).toBe("Draw")
    })
})
