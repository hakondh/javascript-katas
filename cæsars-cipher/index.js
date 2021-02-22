export function encrypt(text, shift) {
    let encrypted = ""
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for(let i = 0; i < text.length; i++) {
        let char = text.charAt(i) // Current character
        if(letters.indexOf(char.toLowerCase()) === -1) encrypted += char // If the character is not a letter (not in the array), just add it as it is
        else {
            let currentIndex = letters.indexOf(char.toLowerCase()) // Index of the character
            let newIndex = (currentIndex + shift) % 26 // Shift the letter
            // Check if the letter should be converted to uppercase
            encrypted += char.toLowerCase() !== char ? letters[newIndex].toUpperCase() : letters[newIndex]
        }
    }
    return encrypted
}
