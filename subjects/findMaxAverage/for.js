// 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
// 示例：
// 输入：[1,12,-5,-6,50,3], k = 4
// 输出：12.75
// 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
// 提示：
// 1 <= k <= n <= 30,000。
// 所给数据范围 [-10,000，10,000]。
var findMaxAverage = function(nums, k) {
    if (nums.length < k) {
        return 0
    }
    var avgs = []
    for (var i = 0; i < nums.length - k; i ++) {
        var sum = 0
        for (var t = i; t < i + k; t ++) {
            sum += nums[t]
        }
        avgs.push(sum / k)
    }
    console.log(avgs)
    return Math.max.apply(null, avgs)
};

// console.log(findMaxAverage([1,12,-5,-6,50,3, 20, 30, 24, -24, 22], 4))
// findMaxAverage([1], 4) === 12.75

module.exports = findMaxAverage