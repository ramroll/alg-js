/**
 * 背包问题，枚举法
 *      大小   价值
 * A    2T     10
 * B    3T      9
 * C    5T     20
 * D   10T     10
 * E    1T      8
 *
 * @param W 最大能承受的重量
 * @param weight 物件的重量数组
 * @param value 物件的价值数组
 * @param acc_w 递归累计重量
 * @param d 决策深度（递归深度）
 */
function knapsack(W, weight, value, acc_w = 0, d = 0) {
  if(d === weight.length || acc_w + weight[d] > W) {
    return 0
  }
  return Math.max(
    knapsack(W, weight, value, acc_w + weight[d], d+1) + value[d],
    knapsack(W, weight, value, acc_w, d+1)
  )
}

const W = 20
const weight = [2,3,5,10,1]
const value  = [10,9,20,10,8]

console.log(knapsack(W, weight, value))

