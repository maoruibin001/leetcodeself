// 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
// 示例：
// 输入：[1,12,-5,-6,50,3], k = 4
// 输出：12.75
// 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
// 提示：
// 1 <= k <= n <= 30,000。
// 所给数据范围 [-10,000，10,000]。
var findMaxAverage = function(nums, k) {
    var sum = 0
    for (var i = 0; i < k; i ++) {
        sum += nums[i]
    }
    var max = sum
    for (var t = i; t < nums.length; t ++) {
        sum += nums[t] - nums[t - k]
        if (sum > max) max = sum
    }
    return max / k
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
// findMaxAverage([1,12,-5,-6,50,3], 4) === 12.75