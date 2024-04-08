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

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]))
