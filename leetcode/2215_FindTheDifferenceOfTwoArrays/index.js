/**
 * @param {number[]} nums2
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
	const map1 = {}
	const map2 = {}

	for (let num of nums1)
		map1[num] = map1.hasOwnProperty(num) ? map1[num] + 1 : 1
	for (let num of nums2)
		map2[num] = map2.hasOwnProperty(num) ? map2[num] + 1 : 1

	nums1 = Object.keys(map1)
		.sort((a, b) => a - b)
		.map((n) => Number(n))
	nums2 = Object.keys(map2)
		.sort((a, b) => a - b)
		.map((n) => Number(n))

	const isPresent = (nums, val) => {
		let l = 0
		let r = nums.length - 1

		while (l <= r) {
			let mid = Math.floor((l + r) / 2)

			if (nums[mid] === val) return true
			else if (nums[mid] > val) r = mid - 1
			else l = mid + 1
		}

		return false
	}
	const ans = [[], []]

	for (let n of nums1) {
		if (!isPresent(nums2, n)) ans[0].push(n)
	}

	for (let n of nums2) {
		if (!isPresent(nums1, n)) ans[1].push(n)
	}

	return ans
}

var findDifference = function (nums1, nums2) {
	const set1 = new Set(nums1)
	const set2 = new Set(nums2)
	const n1 = [...set1].filter((s) => !set2.has(s))
	const n2 = [...set2].filter((s) => !set1.has(s))

	return [n1, n2]
}
