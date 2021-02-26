# the-fiscal-code

Each person in Italy is given an unique ID code after birth registration: The Fiscal Code (Codice Fiscale).

This program creates this code for a person, given some personal data: The name, surname, gender and birthdata of the person. 

To create this code, a set of rules are followed:

- Generate 3 capital letters from thesurname, if it has:
  - At least 3 consonants then the first three consonants are used. (Newman -> NWM).
  - Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
  - Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
- Generate 3 capital letters from thename, if it has:
  - Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
  - More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
  - Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
  - Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
- Generate 2 numbers, 1 letter and 2 numbers fromdate of birthandgender:oTake the last two digits of the year of birth (1985 -> 85).
  - Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
  - For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
  - For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).
