/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
	let max = 0

	// Find the largest element in nums
	for (let num of nums) if (num > max) max = num

	// finding all the prime numbers upto max
	let isPrime = new Array(max + 1).fill(true)

	for (let i = 2; i * i <= max; i++)
		if (isPrime[i]) for (let j = i * i; j <= max; j += i) isPrime[j] = false

	const primes = []

	for (let i = 2; i <= max; i++) if (isPrime[i]) primes.push(i)

	// looping through the array nums and performing prime substraction
	for (let i = 0; i < nums.length; i++) {
		for (let j = primes.length - 1; j >= 0; j--) {
			if (primes[j] >= nums[i]) continue

			if (i === 0) {
				nums[i] -= primes[j]
				break
			}

			if (nums[i] - primes[j] > nums[i - 1]) {
				nums[i] = nums[i] - primes[j]
				break
			}
		}

		if (i > 0 && nums[i] <= nums[i - 1]) return false
	}

	return true
}
