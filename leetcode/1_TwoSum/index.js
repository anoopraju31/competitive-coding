var twoSum = function (nums, target) {
	const map = {}

	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i]

		if (map.hasOwnProperty(diff)) {
			return [map[diff], i]
		}

		map[nums[i]] = i
	}

	return []
}

const nums = [2, 7, 11, 15]
const target = 9

console.log(twoSum(nums, target))
