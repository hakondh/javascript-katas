export function elasticize(word) {
    if(word.length < 3) return word;
    const odd = word.length % 2 !== 0
    const offset = odd ? 1 : 0 // If there is an odd amount of letters, then give the offset a value of 1. This is to not start at the middle letter when stretching the second half
    const wordArr = [...word]
    const halfLength = Math.floor(wordArr.length / 2)
    let stretchedWordArr = odd ? [wordArr[halfLength].repeat(halfLength + 1)] : [] // If the word has an odd amount of letters, then stretch the middle letter and add it to the array
    for(let i = 0; i < halfLength; i++) {
        stretchedWordArr.unshift(wordArr[halfLength - 1 - i].repeat(halfLength - i)) // Add to the beginning of the array
        stretchedWordArr.push(wordArr[halfLength + offset + i].repeat(halfLength - i)) // Add to the end of the array
    }
    return stretchedWordArr.join('')
}