/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	const n = nums.length
	let countZero = 0
	let zeroIdx = -1

	for (let i = 0; i < n; i++)
		if (nums[i] === 0) {
			countZero++
			zeroIdx = i
		}

	if (countZero > 1) return nums.fill(0)
	if (countZero === 1 && zeroIdx !== -1) {
		let product = 1

		for (let i = 0; i < n; i++) if (i !== zeroIdx) product *= nums[i]
		nums.fill(0)
		nums[zeroIdx] = product

		return nums
	}

	const leftArr = new Array(n)
	const rightArr = new Array(n)
	const res = []
	let leftProduct = 1
	let rightProduct = 1

	for (let i = 0; i < n; i++) {
		let j = n - i - 1

		leftArr[i] = leftProduct
		leftProduct *= nums[i]

		rightArr[j] = rightProduct
		rightProduct *= nums[j]
	}

	for (let i = 0; i < nums.length; i++) res.push(leftArr[i] * rightArr[i])

	return res
}
