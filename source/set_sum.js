const viz = require('./lib/viz-dp')
function sum_of_set(A, M, N) {
  const s = Array.from(Array(A.length + 1), x => Array(M+1).fill(false))
  // dp表
  // s[i][j] = true 代表A[0]-A[i]个元素的和中存在和为j的组合
  for(let i = 0; i < A.length + 1; i++) {s[i][0] = true}
  for(let i = 1; i < A.length + 1; i++) {
    for(let j = 1; j <= M; j++) {
      s[i][j] = (A[i-1] <= j) ?
        (s[i - 1][j] || s[i - 1][j - A[i-1]])
        : s[i-1] [j]
    }
  }
  return find_all_answer(s, A, N, M)
}

function find_all_answer(s, A, N, M) {

  let r = []
  if(N === 0 && M === 0) {return [[]]}
  if(N <= 0) {return null}
  for(let i = 1; i < A.length + 1; i++) {
    if(s[i][M]) {
      const nextM = M -A[i-1]
      const nextN = N - 1
      const paths = find_all_answer(s, A, nextN, nextM)
      if (paths) {
        paths.forEach(path => path.push(A[i - 1]))
        r = r.concat(paths)
      }
    }
  }
  return r
}


const A = [1,3,5,7,9]
const paths = sum_of_set(A, 10, 2)
console.log(paths)