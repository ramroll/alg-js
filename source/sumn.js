function sumN(A, n, m) {
  // 最终结果
  let r = null

  // 决策
  const decisions = []

  function inner(i = 0, n, m){
      // 如果已经有结果，终止递归
      if(r) {return}
      // 如果m=0,找到一个解
      if (m === 0) {
          r = decisions.slice()
          return
      }
      // 没有找到解的情况
      if (i === A.length || n === 0) {
          return
      }
      decisions.push(A[i])
      inner(i+1, n - 1, m - A[i])
      decisions.pop(A[i])
      inner(i+1, n, m)
  }
  inner(0, n, m)
  return r
}

console.log(sumN([1,2,3,4,5], 3, 10))
