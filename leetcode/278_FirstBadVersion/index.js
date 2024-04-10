/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		let l = 1
		let r = n

		while (l <= r) {
			let mid = Math.floor((r + l) / 2)
			let isBad = isBadVersion(mid)
			if (isBad && !isBadVersion(mid - 1)) return mid
			if (!isBad) l = mid + 1
			else r = mid - 1
		}
	}
}
