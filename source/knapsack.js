/**
 *      重量   价格      价值
 * 苹果  2斤   5元/斤     10
 * 桔子  3斤   3元/斤      9
 * 香蕉  5斤   4元/斤     20
 * 西瓜 10斤   1元/斤     10
 * 橙子  1斤   8元/斤      8
 * 有一个背包，可承受重量为W，求把东西装进去的最大价值。
 * dp[i][j]代表从前i项中选择若干放入重量为j的背包的最大价值
 * dp[0][-] = 0 对于承重为0的背包，什么都放不进去
 * dp[i][w] = max(dp[i-1][w], vi+dp[i-1][w-wi])
 * @param W 背包最大承重
 * @param weight[] 每种物件的重量
 * @param value[] 每种物件的价值
 * @returns 背包可容纳的最大价值
 */
function knapsack(W, weight, value) {
  const M = weight.length
  const dp = []

  for(let i = 0; i <= M; i++) {
    dp[i] = []
    for(let j = 0; j <= W; j++) {
      if(i === 0 || j === 0) {
        dp[i][j] = 0
      }
      else if(weight[i-1] <= j) {

        dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight[i-1]] + value[i-1])
      }
      else {
        dp[i][j] = dp[i-1][j]
      }
    }
  }
  print_t(dp)
  return dp[M][W]
}



function print_t(dp) {
  for(let i = 0; i < dp.length; i++) {
    console.log(dp[i].map(x=>('' + x).padStart(2, ' ')).join(','))
  }
}

const W = 15
const weight = [2,3,5,10,1]
const value  = [10,9,20,10,8]

console.log(knapsack(W, weight, value))


