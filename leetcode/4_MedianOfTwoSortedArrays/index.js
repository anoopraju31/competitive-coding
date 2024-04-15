/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// Time: O(m + n)
// Space: O(1)
var findMedianSortedArrays = function (nums1, nums2) {
	const m = nums1.length
	const n = nums2.length

	if (m + n === 1 && m === 0) return nums2[0]
	if (m + n === 1 && n === 0) return nums1[0]

	const idx = Math.ceil((m + n) / 2)

	let i = 0
	let j = 0
	let l = 0
	let curr = nums1[0] <= nums2[0] ? nums1[0] : nums2[0]
	let prev = curr

	while (i < m && j < n && l <= idx) {
		if (nums1[i] <= nums2[j]) {
			prev = curr
			curr = nums1[i++]
		} else {
			prev = curr
			curr = nums2[j++]
		}

		l++
	}

	while (i < m && l <= idx) {
		prev = curr
		curr = nums1[i++]
		l++
	}

	while (j < n && l <= idx) {
		prev = curr
		curr = nums2[j++]
		l++
	}

	return (m + n) % 2 === 0 ? (prev + curr) / 2 : prev
}

// Time: O(m + n)
// Space: O(n)
var findMedianSortedArrays = function (nums1, nums2) {
	const m = nums1.length
	const n = nums2.length
	const idx = Math.ceil((m + n) / 2)
	const nums = []
	let i = 0
	let j = 0

	while (i < m && j < n && nums.length <= idx)
		nums.push(nums1[i] <= nums2[j] ? nums1[i++] : nums2[j++])
	while (i < m && nums.length <= idx) nums.push(nums1[i++])
	while (j < n && nums.length <= idx) nums.push(nums2[j++])

	const median =
		(m + n) % 2 === 0 ? (nums[idx] + nums[idx - 1]) / 2 : nums[idx - 1]

	return median
}

// Binary Search
// Time: O(log(m + n))
// Space: O(1)
var findMedianSortedArrays = function (nums1, nums2) {
	if (nums2.length < nums1.length) [nums1, nums2] = [nums2, nums1]

	const m = nums1.length
	const n = nums2.length
	const total = m + n
	const half = Math.floor(total / 2)

	let l = 0
	let r = m - 1

	while (true) {
		let i = Math.floor((l + r) / 2)
		let j = half - i - 2

		let nums1Left = i >= 0 ? nums1[i] : -Infinity
		let nums1Right = i + 1 < nums1.length ? nums1[i + 1] : Infinity
		let nums2Left = j >= 0 ? nums2[j] : -Infinity
		let nums2Right = j + 1 < nums2.length ? nums2[j + 1] : Infinity

		if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
			if (total % 2) return Math.min(nums1Right, nums2Right)
			else
				return (
					(Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) /
					2
				)
		} else if (nums1Left > nums2Right) r = i - 1
		else l = i + 1
	}
}
