var minimumBoxes = function (apple, capacity) {
	let numberOfApples = apple.reduce((acc, num) => acc + num, 0)

	capacity.sort((a, b) => a - b)

	let i = capacity.length - 1
	let count = 0

	while (i >= 0) {
		if (numberOfApples <= 0) break

		numberOfApples -= capacity[i--]
		count++
	}

	return count
}

console.log(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2])) // 2
