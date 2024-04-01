/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Time: O(n^2)
// Space: O(n)
var nextGreaterElement = function (nums1, nums2) {
	const pos = new Array(nums1.length)

	for (let i = 0; i < nums1.length; i++)
		for (let j = 0; j < nums2.length; j++)
			if (nums1[i] === nums2[j]) {
				pos[i] = j
				break
			}

	const res = new Array(nums1.length).fill(-1)

	for (let i = 0; i < pos.length; i++)
		for (let j = pos[i]; j < nums2.length; j++)
			if (nums2[j] > nums2[pos[i]]) {
				res[i] = nums2[j]
				break
			}

	return res
}

// Time: O(n^2)
// Space: O(n)
var nextGreaterElement = function (nums1, nums2) {
	const res = new Array(nums1.length).fill(-1)

	for (let i = 0; i < nums1.length; i++) {
		let idx = -1

		for (let k = 0; k < nums2.length; k++)
			if (nums1[i] === nums2[k]) {
				idx = k
				break
			}

		if (idx === -1) continue

		let j = idx

		while (j < nums2.length) {
			if (nums2[j] > nums2[idx]) {
				res[i] = nums2[j]
				break
			}
			j++
		}
	}

	return res
}

// Time: O(n^2)
// Space: O(1)
var nextGreaterElement = function (nums1, nums2) {
	for (let i = 0; i < nums1.length; i++) {
		let idx = -1

		for (let k = 0; k < nums2.length; k++)
			if (nums1[i] === nums2[k]) {
				idx = k
				break
			}

		if (idx === -1) continue

		let j = idx
		let check = true

		while (j < nums2.length) {
			if (nums2[j] > nums2[idx]) {
				nums1[i] = nums2[j]
				check = false
				break
			}
			j++
		}

		if (check) nums1[i] = -1
	}

	return nums1
}

// Using Stack (Monotonic)
// Time: O(n + m)
// Space: O(n)
var nextGreaterElement = function (nums1, nums2) {
	const map = new Map()

	for (let i = 0; i < nums1.length; i++) map.set(nums1[i], i)

	const stack = []
	const res = new Array(nums1.length).fill(-1)

	for (let i = 0; i < nums2.length; i++) {
		let current = nums2[i]

		while (stack && current > stack[stack.length - 1]) {
			let val = stack.pop()
			let idx = map.get(val)
			res[idx] = current
		}
		if (map.has(current)) stack.push(current)
	}

	return res
}
