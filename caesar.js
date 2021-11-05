function caesar(word, key) {
	const cipherWord = [];
	const keyNum = parseInt(key);
	let position = 0;
	let cipherIndex = 0;
	let check;

	//iterate through word and add key to the index of each letter in the alphabet
	const temp = word.split("");
	for (let i = 0; i < temp.length; i++) {
		
		//keep track of each letter to check for uppercase
		check = temp[i];
		position = getIndexInAlphabet(temp[i].toLowerCase());
		cipherIndex = (position + keyNum) % 26;
		// console.log("cipherIndex is ", cipherIndex);
		if (check.match(/[A-Z]/)) {
			cipherWord.push(getCharAtIndex(cipherIndex).toUpperCase());
		}
		//check for punctuation;
		else if (check.match(/[.,!_]/)) {
			cipherWord.push(check);
		} else {
			cipherWord.push(getCharAtIndex(cipherIndex));
		}
	}
	
	//return word
	return cipherWord.join("");
}

function getIndexInAlphabet(letter) {
	//convert alphabet to array
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const alphabetArray = alphabet.split("");

	// iterate through alphabet
	for (let i = 0; i < alphabetArray.length; i++) {
		// if a match, return index
		if (letter === alphabetArray[i]) {
			return i;
		}
	}
}

function getCharAtIndex(index) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	// console.log(alphabet.charAt(index).toLowerCase());
	return alphabet.charAt(index);
}

caesar("Natasha", 1);

module.exports = caesar;
