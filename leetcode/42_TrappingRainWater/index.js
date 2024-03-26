/**
 * @param {number[]} height
 * @return {number}
 */

// Time: O(n)
// Space: O(n)
var trap = function (height) {
	const n = height.length
	const forwardMax = []
	let max = -Infinity

	for (let i = 0; i < n; i++) {
		if (max < height[i]) max = height[i]
		forwardMax.push(max)
	}

	const backwardMax = new Array(n)
	max = -Infinity

	for (let i = n - 1; i >= 0; i--) {
		if (max < height[i]) max = height[i]
		backwardMax[i] = max
	}
	let sum = 0

	for (let i = 0; i < n; i++)
		sum += Math.min(forwardMax[i], backwardMax[i]) - height[i]

	return sum
}

// Optimal Solution: Two Pointer
// Time: O(n)
// Space: O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	let left = 0
	let right = height.length - 1
	let leftMax = 0
	let rightMax = 0
	let trapped = 0

	while (left < right) {
		leftMax = Math.max(leftMax, height[left])
		rightMax = Math.max(rightMax, height[right])

		if (height[left] < height[right]) trapped += leftMax - height[left++]
		else trapped += rightMax - height[right--]
	}

	return trapped
}
