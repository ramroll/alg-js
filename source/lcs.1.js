function lcs(s, t) {
  const dp = []
  for(let y = 0; y <= t.length; y++) {
    dp[y] = []
    for(let x = 0; x <= s.length; x++) {
      if(x === 0 || y === 0) {
        dp[y][x] = 0
      }
      else if(s[x-1] === t[y-1]) {
        dp[y][x] = dp[y-1][x-1] + 1
      }
      else {
        dp[y][x] = Math.max(
          dp[y-1][x], dp[y][x-1] )
      }
    }
  }
  return dp[t.length][s.length]
}

console.log( lcs('ATANA', 'BANANA') )