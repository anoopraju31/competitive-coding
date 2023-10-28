var singleNumber = function (nums) {
	const map = new Map()

	for (let n of nums) {
		map.set(n, map.has(n) ? map.get(n) + 1 : 1)
	}

	for (let [key, value] of map) {
		if (value === 1) return key
	}
}

const nums = [4, 1, 2, 1, 2]

console.log(singleNumber(nums))
