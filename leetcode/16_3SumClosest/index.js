/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Brute Force Solution
// Time: O(n^3)
// Space: O(1)
// const threeSumClosest = (nums, target) => {
// 	const n = nums.length
// 	let minRange = Infinity
// 	let closestSum = 0

// 	for (let i = 0; i < n - 2; i++)
// 		for (let j = i + 1; j < n - 1; j++)
// 			for (let k = j + 1; k < n; k++) {
// 				let sum = nums[i] + nums[j] + nums[k]

// 				if (minRange > Math.abs(target - sum)) {
// 					minRange = Math.abs(target - sum)
// 					closestSum = sum
// 				}
// 			}

// 	return closestSum
// }

// Two Pointer Method
// Time: O(n^2)
// Space: O(1)
const threeSumClosest = (nums, target) => {
	const n = nums.length
	let minRange = Infinity
	let closestSum = 0
	nums.sort((a, b) => a - b)

	for (let i = 0; i < n - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue

		let j = i + 1
		let k = n - 1

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]

			if (sum === target) return sum
			if (minRange > Math.abs(target - sum)) {
				minRange = Math.abs(target - sum)
				closestSum = sum
			}

			sum > target ? k-- : j++
		}
	}
	return closestSum
}
