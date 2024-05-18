const distributeCoins = (root) => {
	let res = 0

	const dfs = (cur) => {
		if (!cur) return [0, 0]

		const [lSize, lCoins] = dfs(cur.left)
		const [rSize, rCoins] = dfs(cur.right)

		const size = 1 + lSize + rSize
		const coins = cur.val + lCoins + rCoins

		res += Math.abs(size - coins)

		return [size, coins]
	}

	dfs(root)

	return res
}
