/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
	let maxIdx = Math.max(...seats, ...students) + 1
	let countSeats = new Array(maxIdx).fill(0)
	let countStudents = new Array(maxIdx).fill(0)

	for (const seat of seats) countSeats[seat] += 1
	for (const student of students) countStudents[student] += 1

	let i = 0
	let j = 0
	let res = 0
	let remain = students.length

	while (remain) {
		if (countSeats[i] === 0) i++
		if (countStudents[j] === 0) j++
		if (countSeats[i] && countStudents[j]) {
			res += Math.abs(i - j)
			countSeats[i]--
			countStudents[j]--
			remain--
		}
	}

	return res
}
