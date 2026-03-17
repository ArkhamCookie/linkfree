/**
 * Make the first letter of a string uppercase
 *
 * @param {string} word
 * @returns {string} word
 */
function uppercaseFirstLetter(word) {
	let firstLetter = word.charAt(0);
	firstLetter = firstLetter.toUpperCase();
	const remainingLetters = word.slice(1);

	return firstLetter + remainingLetters;
}

export {
	uppercaseFirstLetter,
};
