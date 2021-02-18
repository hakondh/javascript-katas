export function removeStrangers(text) {
    // Remove punctuation, convert to lower case
    const noPunctLowerCase = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    // Remove any excess spaces
    const spacesRemoved = noPunctLowerCase.replace(/\s{2,}/g," ");
    const words = spacesRemoved.split(' ');
    console.log(words);

    let acquaintances = [];
    let friends = [];
    let obj = {};

    for(const word of words) {
        if (!obj[word]) { // New word, add it to the object
            obj[word] = 1;
        }
        else { // Increment the occurrence of the word
            obj[word] = obj[word] + 1;
            if (obj[word] === 3) acquaintances.push(word); // 3 occurrences, add to acquaintances
            else if (obj[word] === 5) { // 5 occurrences
                acquaintances.splice(acquaintances.indexOf(word), 1); // Remove from acquaintances
                friends.push(word); // Add to friends
            }
        }
    }
    return [acquaintances, friends];
}