export function findQuickestRoute(matrix) {
    let carPos
    for(let row of matrix) {
        let index = row.indexOf(2)
        if(index !== -1) {
            carPos = index
            break;
        }
    }

    const route = []
    for(let row of matrix) {
        let stairPos = row.indexOf(1)
        if(stairPos !== -1) { // There is a stair
            if(stairPos === carPos) { // Car is already at stair
                let lastRoute = route.pop()
                route.push('D' + (Number(lastRoute.charAt(1)) + 1))
            }
            else { // Car has to move
                let diff = stairPos - carPos
                let coord = ''
                if(diff < 0) coord = 'L' + (-1 * diff)
                else coord = 'R' + diff
                route.push(coord, 'D1')
                carPos = stairPos
            }
        }
        else { // We are at the bottom
            let exitPos = row.length - 1
            let diff = exitPos - carPos
            let coord = ''
            if(diff !== 0) { // We have to move to the exit
                coord = 'R' + diff
                route.push(coord)
            }
        }
    }
    return route;
}
