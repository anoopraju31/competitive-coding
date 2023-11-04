const maxProfit = (nums) => {
	let left = 0
	let right = 0
	let n = nums.length - 1
	let profit = 0

	while (right < n) {
		if (nums[right + 1] - nums[right] <= 0) left = right + 1
		else profit += nums[right + 1] - nums[right]

		right++
	}

	return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([7, 6, 4, 3, 1]))
