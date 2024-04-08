var countStudents = function (students, sandwiches) {
	while (sandwiches.length > 0) {
		while (students[0] === sandwiches[0] && sandwiches.length > 0) {
			students.shift()
			sandwiches.shift()
		}

		let count = students.length

		while (students[0] !== sandwiches[0]) {
			if (count == 0) return students.length

			students.push(students[0])
			students.shift()

			count--
		}
	}

	return 0
}

var countStudents = function (students, sandwiches) {
	let unableToEat = 0

	while (students.length > 0 && unableToEat < students.length) {
		if (sandwiches[0] === students[0]) {
			sandwiches.shift()
			students.shift()
			unableToEat = 0
		} else {
			let shiftStudent = students.shift()
			students.push(shiftStudent)
			unableToEat++
		}
	}

	return unableToEat
}
