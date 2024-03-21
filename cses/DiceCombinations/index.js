const diceCombinators = (n) => {
	if (n == 1 || n == 0) return 1

	const dp = new Array(n + 1).fill(-1)

	const getCount = (i) => {
		if (i < 0) return 0
		if (i == 1 || i == 0) return 1
		if (dp[i] !== -1) return dp[i]

		dp[i] = 0
		for (let j = 1; j <= 6; j++) dp[i] += getCount(i - j)

		return dp[i]
	}

	return getCount(n)
}

module.exports = diceCombinators
