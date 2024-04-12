/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
	const arr = date.split(' ')
	const months = {
		Jan: 1,
		Feb: 2,
		Mar: 3,
		Apr: 4,
		May: 5,
		Jun: 6,
		Jul: 7,
		Aug: 8,
		Sep: 9,
		Oct: 10,
		Nov: 11,
		Dec: 12,
	}
	const day = arr[0].slice(0, arr[0].length - 2)
	const month = months[arr[1]]
	const year = arr[2]

	return (
		year +
		'-' +
		(month < 10 ? '0' : '') +
		month +
		'-' +
		(day.length === 1 ? '0' : '') +
		day
	)
}
