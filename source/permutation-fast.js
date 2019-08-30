function swap(A, i, j) {
  const t = A[i]
  A[i] = A[j]
  A[j] = t
}

function factor(n) {
  return n === 0 ? 1 : n * factor(n-1)
}

function permutation(str) {
  let r = new Array(factor(str.length))
  let i = 0
  function perm(A, k = 0){

    if(k === A.length - 2) {
      const p = A.pop()
      const q = A.pop()
      const s = A.join('')
      r[i++] = s+p+q
      r[i++] = s+q+p
      A.push(q)
      A.push(p)
      return
    }

    for(let i = k; i < A.length; i++) {
      swap(A,i,k)
      perm(A,k+1)
      swap(A,i,k) 
    }    
  }
  perm([...str])
  return r
}

console.log([...new Set(permutation('abcd'))].length)
// const n7 = permutation('abcdefgh').length
// const n8 = permutation('abcdefghi').length