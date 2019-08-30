function nqueen(
  n
) {

  const results = []
  function __backtrack(n, chessboard = Array(n*n).fill(0), decisions = []) {
    if (decisions.length === n) {
      if (is_valid_solution(n, decisions)) {
        const hash = decisions.sort((x, y) => x - y).join(',')
        if (!results.find(x => x.join(',' === hash))) {
          results.push(decisions)
        }
      }
      return
    }

    for (let i = 0; i < chessboard.length; i++) {
      if (decisions.indexOf(i) === -1) {
        // if (
        //   decisions.find(x => x % n === i % n) ||
        //   decisions.find(x => ~~(x/n) === ~~(i/n))
        // ) {
        //   continue
        // }
        
        __backtrack(n, chessboard, decisions.concat(i))
      }
    }
  }
  __backtrack(n)
  return results
}



function is_valid_solution(n, decisions) {
  const chessboard = Array(n * n).fill(0)
  decisions.forEach(i => {
    chessboard[i] = 1
  })

  const range = [...Array(n)].map((_,i) => i)
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j ++) {
      const p = decisions[i]
      const q = decisions[j]
      const [x1,y1] = [~~(p/n), p % n]
      const [x2,y2] = [~~(q/n), q % n]
      if( 
        (x1 === x2) || // 同一行 
        (y1 === y2) || // 同一列
        ( Math.abs(x1-x2) === Math.abs(y1-y2) ) // 同对角
      ) {
        return false
      }
    }
  }
  return true
}

console.log(nqueen(6))