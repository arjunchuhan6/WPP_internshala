// Write a program to remove a character at the specified position in a given string and return the modified string

const removeCharacter = (str, pos) => {
    let leftString = str.substr(0, pos);
    let rightString = str.substr(pos + 1, str.length)
    return leftString + rightString;
}

console.log(removeCharacter("Arjun", 2));