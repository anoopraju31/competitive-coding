/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
	const n = ring.length
	let dp = new Array(n).fill(0)

	for (let k = key.length - 1; k > -1; k--) {
		let nextDp = new Array(n).fill(Infinity)

		for (let r = 0; r < n; r++)
			for (let i = 0; i < n; i++)
				if (ring[i] === key[k]) {
					let minDist = Math.min(Math.abs(r - i), n - Math.abs(r - i))
					nextDp[r] = Math.min(nextDp[r], minDist + dp[i] + 1)
				}

		dp = nextDp
	}

	return dp[0]
}
