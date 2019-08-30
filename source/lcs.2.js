function get_result(dp, s, t, x = s.length, y = t.length ,result = ''){
  if(x === 0 || y === 0) {
    return result
  }
  if(s[x-1] === t[y-1]) {
    return get_result(dp, s, t, x-1, y-1, result + s[x-1])
  }
  else {
    if(dp[y-1][x] > dp[y][x-1]) {
      return get_result(dp, s, t, x, y - 1, result )
    } else {
      return get_result(dp, s, t, x - 1, y, result )
    }
  }

}

const dp = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 2, 2],
  [0, 1, 1, 2, 2, 3],
  [0, 1, 1, 2, 3, 3],
  [0, 1, 1, 2, 3, 4]]

console.log( get_result(dp, 'ATANA', 'BANANA') )