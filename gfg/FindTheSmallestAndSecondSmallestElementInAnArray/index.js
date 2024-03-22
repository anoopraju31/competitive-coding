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

function printList(res, n) {
	let s = ''
	for (let i = 0; i < n; i++) {
		s += res[i]
		s += ' '
	}
	console.log(s)
}

function main() {
	let t = parseInt(readLine())
	let i = 0
	for (; i < t; i++) {
		let n = parseInt(readLine())
		let arr = new Array(n)
		let input_ar1 = readLine()
			.split(' ')
			.map((x) => parseInt(x))
		for (let i = 0; i < n; i++) {
			arr[i] = input_ar1[i]
		}
		let obj = new Solution()
		let res = obj.minAnd2ndMin(arr, n)
		printList(res, res.length)
	}
} // } Driver Code Ends

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
	minAnd2ndMin(arr, n) {
		const set = new Set(arr)

		if (set.size === 1) return [-1, -1]

		let min1 = Infinity
		for (let n of set.values()) if (n < min1) min1 = n

		let min2 = Infinity
		for (let n of set.values()) if (n < min2 && n > min1) min2 = n

		return [min1, min2]
	}
}
