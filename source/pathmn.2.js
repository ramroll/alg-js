function f(w, h) {

  const dp = []
  for(let y = 0; y <= h; y++ ) {
    dp[y] = []
    for(let x = 0; x <= w; x++) {
      if(x===0 && y ===0) {dp[y][x] = 1}
      else if(x === 0) {
        dp[y][x] = dp[y-1][x]
      }else if(y === 0) {
        dp[y][x] = dp[y][x-1]
      }else{
        dp[y][x] = dp[y][x-1] + dp[y-1][x]
      }
    }
  }
  return dp[h][w]
}


console.log( f(4, 3) )