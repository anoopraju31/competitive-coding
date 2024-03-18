var isPossibleToSplit = function (nums) {
	const dist = {}

	for (let i = 0; i < nums.length; i++)
		dist[nums[i]] = dist.hasOwnProperty(nums[i]) ? dist[nums[i]] + 1 : 1

	for (let num in dist) if (dist[num] > 2) return false

	return true
}

console.log(isPossibleToSplit([1, 1, 2, 2, 3, 4])) // true
