const getNumberOfBouqets = (bloomDay, mid, k) => {
	let numberOfBouqets = 0
	let count = 0
	for (let i = 0; i < bloomDay.length; i++) {
		if (bloomDay[i] <= mid) count++
		else count = 0

		if (count === k) {
			numberOfBouqets++
			count = 0
		}
	}

	return numberOfBouqets
}

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
	let l = 0
	let h = 0

	for (const d of bloomDay) h = Math.max(h, d)

	let minDays = -1

	while (l <= h) {
		let mid = Math.floor((l + h) / 2)

		if (getNumberOfBouqets(bloomDay, mid, k) >= m) {
			minDays = mid
			h = mid - 1
		} else l = mid + 1
	}

	return minDays
}
