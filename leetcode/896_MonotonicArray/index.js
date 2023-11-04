var isMonotonic = function (nums) {
	let isIncreasing = true
	let isDecreasing = true

	for (let i = 1; i < nums.length; i++) {
		if (nums[i - 1] > nums[i]) isIncreasing = false
		if (nums[i - 1] < nums[i]) isDecreasing = false
	}

	return isIncreasing || isDecreasing
}

const nums = [1, 2, 2, 3]

console.log(isMonotonic(nums))
