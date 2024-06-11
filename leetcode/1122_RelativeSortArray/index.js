/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

var relativeSortArray = (arr1, arr2) => {
	const n = arr1.length
	const res = []
	const search = (num) => {
		let l = 0
		let r = arr1.length - 1
		let mid

		while (l <= r) {
			mid = Math.floor((l + r) / 2)

			if (arr1[mid] == num) return mid
			else if (arr1[mid] < num) l = mid + 1
			else r = mid - 1
		}

		return -1
	}

	arr1.sort((a, b) => a - b)

	const arr = arr1.slice(0)

	for (const num of arr2) {
		const idx = search(num)
		let i = idx

		while (i < n && arr1[i] === num) {
			arr[i++] = -1
			res.push(num)
		}

		i = idx - 1

		while (i >= 0 && arr1[i] === num) {
			arr[i--] = -1
			res.push(num)
		}
	}

	for (const num of arr) if (num !== -1) res.push(num)

	return res
}

var relativeSortArray = (arr1, arr2) => {
	const map = {}

	for (const num of arr1) map[num] = map[num] + 1 || 1

	const res = []

	for (const num of arr2) {
		let count = map[num]

		while (count--) res.push(num)

		map[num] = -1
	}

	const remaining = []
	for (const key of Object.keys(map)) {
		if (map[key] === -1) continue
		remaining.push(key)
	}

	remaining.sort((a, b) => a - b)

	for (const num of remaining) {
		let count = map[num]

		while (count--) res.push(num)
	}

	return res
}

var relativeSortArray = (arr1, arr2) => {
	const set = new Set(arr2)
	const map = {}
	const res = []
	const end = []

	for (const num of arr1) {
		if (!set.has(num)) end.push(num)

		map[num] = map[num] + 1 || 1
	}

	for (const num of arr2) {
		let count = map[num]

		while (count--) res.push(num)
	}

	end.sort((a, b) => a - b)

	for (const num of end) res.push(num)

	return res
}
