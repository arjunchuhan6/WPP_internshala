//Write a js program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

const createString = (string) => {
    let backString = string.slice(-3, string.length);
    return backString + string + backString;
}
console.log(createString("MADAM"));