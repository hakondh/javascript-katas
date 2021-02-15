export function charCount(c, str) {
    if(typeof c !== 'string' || typeof str !== 'string') return;
    let count = 0;
    for(let i = 0; i < str.length; i++) if(str.charAt(i) === c) count++;
    return count;
}