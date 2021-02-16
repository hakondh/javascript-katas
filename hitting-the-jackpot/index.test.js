import { testJackpot } from "./index.js";

describe('Test jackpot', () => {
    test('testJackpot(["@", "@", "@", "@"]) ➞ true', () => {
        const arr = ["@", "@", "@", "@"];
        const expected = true;

        expect(testJackpot(arr)).toBe(expected);
    });

    test('testJackpot(["abc", "abc", "abc", "abc"]) ➞ true', () => {
        const arr = ["abc", "abc", "abc", "abc"];
        const expected = true;

        expect(testJackpot(arr)).toBe(expected);
    });

    test('testJackpot(["SS", "SS", "SS", "SS"]) ➞ true', () => {
        const arr = ["SS", "SS", "SS", "SS"];
        const expected = true;

        expect(testJackpot(arr)).toBe(expected);
    });

    test('testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false', () => {
        const arr = ["&&", "&", "&&&", "&&&&"];
        const expected = false;

        expect(testJackpot(arr)).toBe(expected);
    });

    test('testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false', () => {
        const arr = ["SS", "SS", "SS", "Ss"];
        const expected = false;

        expect(testJackpot(arr)).toBe(expected);
    });
});

/*
testJackpot(["@", "@", "@", "@"]) ➞
truetestJackpot(["abc", "abc", "abc", "abc"]) ➞
truetestJackpot(["SS", "SS", "SS", "SS"]) ➞
truetestJackpot(["&&", "&", "&&&", "&&&&"]) ➞
falsetestJackpot(["SS", "SS", "SS", "Ss"]) ➞false*/
