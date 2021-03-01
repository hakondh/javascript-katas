const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

export function convertToPigLatin(str) {
    // Split the string into an array of words, convert each word, and join them together again
    return str.split(' ').map((word) => convertWord(word)).join(' ')
}

function convertWord(word) {
    let returnWord = word
    for(let i = 0; i < word.length; i++) {
        if(VOWELS.includes(word.charAt(i))) {
            if(i === 0) return returnWord += 'way' // Add way and return if first char is a vowel
            return returnWord += 'ay' // Add ay and return if a vowel is encountered later
        }
        else returnWord = returnWord.substring(1) + word.charAt(i) // Move consonants to the end of the word
    }
    return returnWord
}