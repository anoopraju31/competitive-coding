const wonderfulSubstrings = (word) => {
	let mask = 0
	let cnt = {}
	let ans = 0
	cnt[0] = 1

	for (let i = 0; i < word.length; i++) {
		let idx = word.charCodeAt(i) - 97

		mask ^= 1 << idx
		ans += cnt[mask]

		for (let j = 0; j < 10; j++) {
			let preMask = mask ^ (1 << j)
			ans += cnt[preMask] || 0
		}

		cnt[mask] = (cnt[mask] || 0) + 1
	}

	return ans
}

console.log(wonderfulSubstrings('aabb'))
