/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
	let sum1 = 0

	for (let num of nums1) sum1 += num

	let sum2 = 0

	for (let num of nums2) sum2 += num

	let dif = sum2 - sum1

	return dif / nums1.length
}
