import { encrypt } from "./index.js";

describe("Test Cæsar's Cipher Encryption", () => {
    test("encrypt(\"middle-Outz\", 2) ➞\"okffng-Qwvb\"", () => {
        const text = "middle-Outz"
        const shift = 2
        const expected = "okffng-Qwvb"

        expect(encrypt(text, shift)).toBe(expected)
    })
    test("encrypt(\"Always-Look-on-the-Bright-Side-of-Life\", 5) ➞\"Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj\"", () => {
        const text = "Always-Look-on-the-Bright-Side-of-Life"
        const shift = 5
        const expected = "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

        expect(encrypt(text, shift)).toBe(expected)
    })
    test("encrypt(\"A friend in need is a friend indeed\", 20) ➞\"U zlcyhx ch hyyx cm u zlcyhx chxyyx\"", () => {
        const text = "A friend in need is a friend indeed"
        const shift = 20
        const expected = "U zlcyhx ch hyyx cm u zlcyhx chxyyx"

        expect(encrypt(text, shift)).toBe(expected)
    })
})