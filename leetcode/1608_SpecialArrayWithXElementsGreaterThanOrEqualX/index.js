/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    const n = nums.length
    const count = new Array(n + 1).fill(0)

    for (const num of nums) {
        let index = num < n? num : n
        count[index]++
    }

    let totalRight = 0

    for (let i = n ; i >= 0; i--) {
        totalRight += count[i]
        if (i === totalRight) return totalRight
    }

    return -1
};