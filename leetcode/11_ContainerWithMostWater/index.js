const maxArea = function (height) {
	if (height.length == 0) return 0

	let maxArea = 0
	let left = 0
	let right = height.length - 1

	while (left < right) {
		let width = right - left
		let area = Math.min(height[left], height[right]) * width

		maxArea = Math.max(maxArea, area)

		if (height[left] <= height[right]) left++
		else right--
	}

	return maxArea
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

console.log(maxArea(height))
