/** Textual markov chain generator. */

class MarkovMachine {
	/** Build markov machine; read in text.*/

	constructor(text) {
		// A "word" will also include any punctuation around the word, so this will
		// include things like "The", "cat", "cat.".
		this.words = text.split(/[ \r\n]+/);
		this.chains = this.getChains();
	}

	/** Get markov chain: returns Map of Markov chains.
	 *
	 *  For text of "The cat in the hat.", chains will be:
	 *
	 *  {
	 *   "The": ["cat"],
	 *   "cat": ["in"],
	 *   "in": ["the"],
	 *   "the": ["hat."],
	 *   "hat.": [null],
	 *  }
	 *
	 * */

	getChains() {
		const textChain = new Map();

		for (let i = 0; i < this.words.length; i++) {
			let nextWord = this.words[i + 1];
			if (!nextWord) {
				nextWord = null;
			}

			if (textChain.has(this.words[i])) {
				let currWords = textChain.get(this.words[i]);
				currWords.push(nextWord);
				textChain.set(this.words[i], currWords);
			} else {
				textChain.set(this.words[i], [nextWord]);
			}
		}

		console.log(textChain);
		return textChain;
	}

	/** Return random text from chains, starting at the first word and continuing
	 *  until it hits a null choice. */

	getText() {
		// TODO: implement this!
		// - start at the first word in the input text
		// - find a random word from the following-words of that
		// - repeat until reaching the terminal null
	}
}

// const catInHatMachine = new MarkovMachine(
//   `I am Daniel

//   I am Sam
//   Sam I am

//   That Sam-I-am
//   That Sam-I-am!
//   I do not like
//   That Sam-I-am

//   Do you like
//   Green eggs and ham

//   I do not like them,
//   Sam-I-am.
//   I do not like
//   Green eggs and ham.

//   Would you like them
//   Here or there?

//   I would not like them
//   Here or there.
//   I would not like them
//   Anywhere.
//   I do not like
//   Green eggs and ham.
//   I do not like them,
//   Sam-I-am`
// );

module.exports = {
	MarkovMachine,
};
