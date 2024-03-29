/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Time: O(n)
// Space: O(n)
var rotate = function (nums, k) {
	const n = nums.length
	const arr = new Array(n)
	k = k % n
	let i = 0

	while (i < n - k) {
		arr[k + i] = nums[i]
		i++
	}

	i = 0
	while (i < k) {
		arr[i] = nums[n - k + i]
		i++
	}

	i = 0

	while (i < n) {
		nums[i] = arr[i]
		i++
	}
}

// Time: O(n)
// Space: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	const n = nums.length
	k = k % n
	let l = 0
	let r = n - 1

	while (l < r) {
		let t = nums[r]
		nums[r] = nums[l]
		nums[l] = t
		l++
		r--
	}

	l = 0
	r = k - 1

	while (l < r) {
		let t = nums[r]
		nums[r] = nums[l]
		nums[l] = t
		l++
		r--
	}

	l = k
	r = n - 1

	while (l < r) {
		let t = nums[r]
		nums[r] = nums[l]
		nums[l] = t
		l++
		r--
	}
}
