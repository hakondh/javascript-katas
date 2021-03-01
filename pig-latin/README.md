# pig-latin

This program converts text into pig latin.

- Words that begin with a vowel will get a "way"
added to the end.
- Otherwise, all letters are moved to the end of the 
word, until a vowel is encountered. Then an "ay" is 
  added to the end.
- The input text should have no punctuation.
  
Examples:

```
convertToPigLatin("this is pig latin") ➞ "isthay isway igpay atinlay"
convertToPigLatin("wall street journal") ➞ "allway eetstray ournaljay"
```