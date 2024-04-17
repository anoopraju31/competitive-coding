/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
	const stack = []

	for (let asteroid of asteroids) {
		while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
			let dif = asteroid + stack[stack.length - 1]

			if (dif < 0) stack.pop()
			else if (dif > 0) asteroid = 0
			else {
				stack.pop()
				asteroid = 0
			}
		}

		if (asteroid) stack.push(asteroid)
	}

	return stack
}

var asteroidCollision = function (asteroids) {
	const stack = []

	for (let asteroid of asteroids) {
		while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
			let dif = asteroid + stack[stack.length - 1]

			if (dif <= 0) stack.pop()
			if (dif >= 0) asteroid = 0
		}

		if (asteroid) stack.push(asteroid)
	}

	return stack
}
