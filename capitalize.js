function capitalize(word) {
    const firstLetter = word.charAt(0);
    word = firstLetter.toUpperCase().concat(word.slice(1));
    return word;
}
module.exports = capitalize;