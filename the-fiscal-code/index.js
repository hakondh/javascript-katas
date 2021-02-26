const VOWELS = ['A', 'E', 'I', 'O', 'U']
const MONTHS = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }

export function getFiscalCode(person) {
    return getSurnameLetters(person.surname) + getNameLetters(person.name) + getNumbers(person.dob, person.gender)
}

export function getSurnameLetters(surname) {
    const chars = getUpperCaseArr(surname)
    const consonants = getConsonants(chars)
    const vowels = getVowels(chars)
    if(surname.length < 3 ) return getPaddedNameCode(surname, consonants, vowels)
    else if(consonants.length >= 3) return consonants.slice(0, 3).join('')
    else return consonants.slice(0, 2).join('') + vowels[0]
}

export function getNameLetters(name) {
    const chars = getUpperCaseArr(name)
    const consonants = getConsonants(chars)
    const vowels = getVowels(chars)
    if(name.length < 3 ) return getPaddedNameCode(name, consonants, vowels)
    else if(consonants.length === 3) return consonants.slice(0, 3).join('')
    else if(consonants.length > 3) return consonants[0] + consonants[2] + consonants[3]
    else if(consonants.length < 3) return consonants.slice(0, 2).join('') + vowels[0]

}

export function getNumbers(birth, gender) {
    const dobArr = birth.split('/')
    const birthYearDigits = dobArr[2].slice(2)
    const birthMonthLetter = MONTHS[dobArr[1]]
    let birthDay = dobArr[0]
    if(gender === 'M' && birthDay.length === 1) birthDay = '0' + birthDay
    else if(gender === 'F') birthDay = Number(birthDay) + 40
    return birthYearDigits + birthMonthLetter + birthDay

}

function getUpperCaseArr(str) {
    return str.toUpperCase().split('')
}

function getConsonants(chars) {
    return chars.filter(char => !VOWELS.includes(char))
}

function getVowels(chars) {
    return chars.filter(char => VOWELS.includes(char))
}

function getPaddedNameCode(name, consonants, vowels) {
    let str = ''
    str += consonants.join('')
    str += vowels.join('')
    if(name.length < 2) str += 'XX'
    else str += 'X'
    return str
}