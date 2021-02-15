import { replaceVowels} from "./index";

describe('Replace vowels in a string', () => {
    test('replaceVowels("karAchi") ➞"k1r1ch3"', () => {
        const word = 'karAchi';
        const expected = 'k1r1ch3';

        expect(replaceVowels(word)).toBe(expected);
    });
    test('replaceVowel("chEmBur") ➞"ch2mb5r"', () => {
        const word = 'chEmBur';
        const expected = 'ch2mb5r';

        expect(replaceVowels(word)).toBe(expected);

    });
    test('replaceVowel("khandbari") ➞"kh1ndb1r3"', () => {
        const word = 'khandbari';
        const expected = 'kh1ndb1r3';

        expect(replaceVowels(word)).toBe(expected);

    });
    test('replaceVowel("LexiCAl") ➞"l2x3c1l"', () => {
        const word = 'LexiCAl';
        const expected = 'l2x3c1l';

        expect(replaceVowels(word)).toBe(expected);

    });
    test('replaceVowel("fuNctionS") ➞"f5Nct34ns"', () => {
        const word = 'fuNctionS';
        const expected = 'f5nct34ns';

        expect(replaceVowels(word)).toBe(expected);

    });

    test('replaceVowel("EASY") ➞"12sy"', () => {
        const word = 'EASY';
        const expected = '21sy';

        expect(replaceVowels(word)).toBe(expected);

    });
})