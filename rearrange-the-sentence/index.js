export function rearrange(sentence) {
    const words = sentence.split(' ')
    let arr = [] // Array to store arranged, modified words
    const length = words.length // Store original length, as words will be removed when they are arranged
    for(let i = 1; i <= length; i++) {
        for(const word of words) {
            if(word.includes(i)) { // If the word contains the current number
                let newWord = word.replace(i, '') // Remove the number from the word
                arr.splice(i - 1, 0, newWord) // Add the word to the array
                let index = words.indexOf(word) // Index of the word in the original array
                words.splice(index, 1) // Remove the word from original array
            }
        }
    }
    return arr.join(' ')
}