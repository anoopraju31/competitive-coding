const moveZeroes = (nums) => {
	let left = 0
	let right = 0
	let n = nums.length

	while (right < n) {
		if (left === right && nums[left] !== 0) {
			left++
		} else if (left !== right && nums[left] === 0 && nums[right] !== 0) {
			nums[left++] = nums[right]
			nums[right] = 0
		}

		right++
	}

	return nums
}

const nums = [0, 1, 0, 3, 12]

console.log(moveZeroes(nums))
