function swap(A, i, j) {
  const t = A[i]
  A[i] = A[j]
  A[j] = t
}

function join(list) {
  let s = ''
  for(let i = 0; i < list.length; i++) {
    s += list[i]
  }
  return s
}

function permutation(str) {

  let r = []
  function perm(A) {

    const c = Array(A.length).fill(0)
    r.push(A.join(''))
    for(let i = 0; i < A.length; ) {
      if(c[i] < i) {
        swap(A, i & 1 ? c[i] : 0, i)
        r.push()
        c[i]++
        i = 0
        r.push(join(A))
      }
      else {
        c[i++] = 0
      }
    }
  }
  perm([...str])
  return r
}

console.log( permutation('abc') )