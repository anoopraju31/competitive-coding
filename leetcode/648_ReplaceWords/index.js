/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
// var replaceWords = function (dictionary, sentence) {
//     const set = new Set(dictionary)
//     const words = sentence.split(' ')
//     const replacedWords = []

//     for (const word of words) {
//         let isPresent = false

//         for (let i = 1; i <= word.length; i++) {
//             let prefix = word.slice(0, i)

//             if (set.has(prefix)) {
//                 replacedWords.push(prefix)
//                 isPresent = true
//                 break
//             }
//         }

//         if (!isPresent) replacedWords.push(word)
//     }

//     return replacedWords.join(' ')
// };

var replaceWords = function (dictionary, sentence) {
	const set = new Set(dictionary)
	sentence = sentence.split(' ')

	for (let i = 0; i < sentence.length; i++) {
		for (let j = 1; j <= sentence[i].length; j++) {
			const prefix = sentence[i].slice(0, j)

			if (set.has(prefix)) {
				sentence[i] = prefix
				break
			}
		}
	}

	return sentence.join(' ')
}
