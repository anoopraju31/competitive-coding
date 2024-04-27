//{ Driver Code Starts
//Initial Template for javascript

'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', (inputStdin) => {
	inputString += inputStdin
})

process.stdin.on('end', (_) => {
	inputString = inputString
		.trim()
		.split('\n')
		.map((string) => {
			return string.trim()
		})

	main()
})

function readLine() {
	return inputString[currentLine++]
}

/* Function to print an array */
function printArray(arr, size) {
	let i
	let s = ''
	for (i = 0; i < size; i++) {
		s += arr[i] + ' '
	}
	console.log(s)
}

function main() {
	let t = parseInt(readLine())
	let i = 0
	for (; i < t; i++) {
		let n = parseInt(readLine())
		let arr = new Array(n)
		let inputArr = readLine()
			.split(' ')
			.map((x) => parseInt(x))
		for (let j = 0; j < n; j++) arr[j] = inputArr[j]
		let sum = parseInt(readLine())
		let obj = new Solution()
		let res = obj.isSubsetSum(arr, n, sum)
		console.log(Number(res))
	}
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} sum
 * @return {boolean}
 */

class Solution {
	isSubsetSum(arr, n, sum) {
		const dp = new Array(n + 1)

		for (let r = 0; r <= n; r++) {
			dp[r] = new Array(sum + 1)
			dp[r][0] = true
		}

		for (let c = 1; c <= sum; c++) dp[0][c] = false

		for (let r = 1; r <= n; r++)
			for (let c = 1; c <= sum; c++)
				if (arr[r - 1] <= c)
					dp[r][c] = dp[r - 1][c - arr[r - 1]] || dp[r - 1][c]
				else dp[r][c] = dp[r - 1][c]

		return dp[n][sum]
	}
}
