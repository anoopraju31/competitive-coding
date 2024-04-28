/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
	const adj = new Array(n)

	for (let i = 0; i < n; i++) adj[i] = []

	for (let [v1, v2] of edges) {
		adj[v1].push(v2)
		adj[v2].push(v1)
	}

	const count = new Array(n).fill(1)
	const ans = new Array(n).fill(0)

	const dfs1 = (node, parent) => {
		for (let child of adj[node]) {
			if (child !== parent) {
				dfs1(child, node)
				count[node] += count[child]
				ans[node] += ans[child] + count[child]
			}
		}
	}

	const dfs2 = (node, parent) => {
		for (let child of adj[node]) {
			if (child !== parent) {
				ans[child] = n - count[child] + ans[node] - count[child]
				dfs2(child, node)
			}
		}
	}

	dfs1(0, -1)
	dfs2(0, -1)

	return ans
}
