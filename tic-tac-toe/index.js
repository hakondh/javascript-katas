export function getResult(matrix) {
    console.table(matrix)
    // Check if there is a winner streak in the rows
    for(let row of matrix) {
        if(hasStreak(row)) {
            console.log(`Winner: ${row[0]}`)
            return row[0]
        }
    }

    // Transpose the matrix and then checking in the same way as before
    const transposedMatrix = transpose(matrix)

    // Check if there is a winner streak in the columns
    for(let row of transposedMatrix) {
        if(hasStreak(row)) {
            console.log(`Winner: ${row[0]}`)
            return row[0]
        }
    }

    // Check if there is a winner streak in left-to-right diagonal
    let ltrDiagonal = matrix.reduce((diagonal, row, index) => {
        diagonal.push(row[index])
        return diagonal
    }, [])

    if(hasStreak(ltrDiagonal)) {
        console.log(`Winner: ${ltrDiagonal[0]}`)
        return ltrDiagonal[0]
    }

    // Check if there is a winner streak in right-to-left diagonal
    let rtlDiagonal = matrix.reduce((diagonal, row, index) => {
        diagonal.push(row[row.length - 1 - index])
        return diagonal
    }, [])

    if(hasStreak(rtlDiagonal)) {
        console.log(`Winner: ${rtlDiagonal[0]}`)
        return rtlDiagonal[0]
    }

    console.log("Winner: Draw")
    return 'Draw'
}

function hasStreak(row){
    return row.every(element => row[0] === element)
}

function transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}


