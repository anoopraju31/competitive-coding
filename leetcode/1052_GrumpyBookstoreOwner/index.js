const maxSatisfied = function (customers, grumpy, minutes) {
	const n = customers.length
	let l = 0
	let window = 0
	let maxWindow = 0
	let satisfied = 0

	for (let r = 0; r < n; r++) {
		if (grumpy[r]) window += customers[r]
		else satisfied += customers[r]

		if (r - l + 1 > minutes) {
			if (grumpy[l]) window -= customers[l]
			l++
		}

		maxWindow = Math.max(window, maxWindow)
	}

	return satisfied + maxWindow
}
