/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
	logs.sort((a, b) => a[0] - b[0])
	const populations = new Array(logs.length).fill(1)

	for (let i = 0; i < logs.length; i++)
		for (let j = 0; j < logs.length; j++)
			if (logs[j][0] <= logs[i][0] && logs[j][1] > logs[i][0] && i !== j)
				populations[i]++

	let idx = -1
	let max = 0

	for (let i = 0; i < logs.length; i++)
		if (populations[i] > max) {
			max = populations[i]
			idx = i
		}

	return logs[idx][0]
}
