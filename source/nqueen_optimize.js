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
        __backtrack(n, chessboard, decisions.concat(i))
      }
    }
  }
  __backtrack(n)
  return results
}

function find_next_step(n, decisions) {
  
}
