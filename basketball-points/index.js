export function getPoints(twoPointers, threePointers) {
    return getTwoPointSum(twoPointers) + getThreePointSum(threePointers);
}

export function getTwoPointSum(twoPointers) {
    return twoPointers * 2;
}

export function getThreePointSum(threePointers) {
    return threePointers * 3;
}
