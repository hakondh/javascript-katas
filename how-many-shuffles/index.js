export function countShuffles(num) {
    if(num % 2 !== 0 || num <= 0) return
    let arr = createArray(num)
    let arrCopy = [...arr] // Clone the arr, as divideArray will modify the original array passed in

    let shuffledArr = shuffle(divideArray(arrCopy), num)
    let counter = 0
    let equal
    do{
        shuffledArr = shuffle(divideArray(shuffledArr), num)
        counter++
        equal = compareArrays(shuffledArr, arr)
    }
    while(!equal) counter++
    return counter
}

function createArray(length) {
    let newArr = [];
    for(let i = 0; i < length; i++) {
        newArr[i] = i + 1
    }
    return newArr
}

function divideArray(arr) {
    let firstHalf = arr.splice(0, arr.length / 2) // num/2 will always return an integer since this is an even number
    // Second half will be what is left of arr
    return [firstHalf, arr]
}

function shuffle(arrs, length) {
    let shuffledArr = []
    for(let i = 0; i < length / 2; i++) {
        shuffledArr.push(arrs[0][i])
        shuffledArr.push(arrs[1][i])
    }
    return shuffledArr
}

function compareArrays(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false
    }
    return true
}

