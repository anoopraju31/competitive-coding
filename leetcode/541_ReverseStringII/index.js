var reverseStr = function (s, k) {
	const arr = s.split('')

	let c = 0

	for (let i = 0; i < s.length; i += k) {
		if (c % 2 == 0) {
			let left = i
			let right = i + k - 1

			while (left < right) {
				let temp = arr[left]
				arr[left++] = arr[right]
				arr[right--] = temp
			}
		}

		c++
	}

	return arr.join('')
}

const s = 'abcdefg'
const k = 2

console.log(reverseStr(s, k))
