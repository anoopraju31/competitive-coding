var readline = require('readline')

var r = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
})
const MOD = 1000000007
const diceCombinators = (n) => {
	const dp = new Array(n + 1).fill(0)
	dp[0] = 1

	for (let i = 1; i <= n; i++)
		for (let j = 1; j <= 6; j++) if (j <= i) dp[i] = (dp[i] + dp[i - j]) % MOD

	return dp[n]
}

r.on('line', function (line) {
	var vals = line.split(' ')
	console.log(diceCombinators(parseInt(vals[0])))
})
