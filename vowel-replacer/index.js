export function replaceVowels(word){
    word = word.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < word.length; i++) {
        const vowelIndex = vowels.indexOf(word.charAt(i));
        if(vowelIndex !== -1) word = word.substr(0, i) + (vowelIndex + 1) + word.substr(i + 1);
    }
    return word;
}