import { findQuickestRoute } from "./index"

describe('Test findQuickestRoute()', () => {
    test('findQuickestRoute([[1, 0, 0, 0, 2],[0, 0, 0, 0, 0]]) ➞ ["L4", "D1", "R4"]', () => {
        expect(findQuickestRoute([[1, 0, 0, 0, 2],[0, 0, 0, 0, 0]])).toEqual(["L4", "D1", "R4"])
    })

    test('findQuickestRoute([[2, 0, 0, 1, 0],[0, 0, 0, 1, 0],[0, 0, 0, 0, 0]\n' +
        ']) ➞ ["R3", "D2", "R1"]', () => {
        expect(findQuickestRoute([[2, 0, 0, 1, 0],[0, 0, 0, 1, 0],[0, 0, 0, 0, 0]])).toEqual(["R3", "D2", "R1"])
    })

    test('findQuickestRoute([[0, 0, 0, 0, 2]] ➞ []', () => {
        expect(findQuickestRoute([[0, 0, 0, 0, 2]])).toEqual([])
    })
})
