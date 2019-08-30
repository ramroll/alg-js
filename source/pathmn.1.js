function f(x,y, dp = []) {
  if(!dp[y]) {
    dp[y] = []
  }
  if(dp[y][x] !== undefined) {
    return dp[y][x]
  }

  if(x > 0 && y > 0) {
    dp[y][x] = f(x-1, y, dp) + f(x, y - 1, dp)
  }
  else if(x > 0) {
    dp[y][x] = f(x-1, y, dp)
  }
  else if(y > 0) {
    dp[y][x] = f(x, y-1, dp)
  }
  else {
    dp[y][x] = 1
  }

  return dp[y][x]
}


console.log( f(4, 3) )