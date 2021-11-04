

function reverseString(word) {
    const temp = word.split("").reverse().join("");
    return temp;
}
module.exports = reverseString;