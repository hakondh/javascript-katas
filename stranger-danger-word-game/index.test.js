import { removeStrangers } from "./index.js";

describe('Test removeStrangers', () => {
   test('removeStrangers("See Spot run. See Spot jump. Spot likes jumping. See Spot fly.") ➞ [["spot", "see"], []]', () => {
      const text =  'See Spot run. See Spot jump. Spot likes jumping. See Spot fly.';
      const expected = [['spot', 'see'], []];

      expect(removeStrangers(text)).toEqual(expected);
   });

   test('removeStrangers("Hey Hello, Hey Hello, Hey Hello, Hey Hello, Hey Hello") ➞ [[], ["hey", "hello"]]', () => {
   const text =  'Hey Hello! Something! Hey Hello. Another Word... Hey Hello, Hey Hello, Hey Hello';
      const expected = [[], ['hey', 'hello']];

      expect(removeStrangers(text)).toEqual(expected);
   });

   test('removeStrangers("Hello hello hello hey hey hey hey hey") ➞ [["hello"], ["hey"]]', () => {
   const text =  'Hello hello hello hey hey hey hey hey';
   const expected = [['hello'], ['hey']];

      expect(removeStrangers(text)).toEqual(expected);
   });

   test('removeStrangers("a! lot???? of --- punctuation... test! test. & test ") ➞ [[test], []]', () => {
   const text =  "a! lot???? of --- punctuation... test! test. & test don't don't don't";
   const expected = [['test', "don't"], []];

      expect(removeStrangers(text)).toEqual(expected);
   });
});