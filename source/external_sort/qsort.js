function qsort(A, lo = 0, hi = A.length ){
  if(hi - lo <= 1) {
    return
  }
  const r = partition(A, lo, hi)
  qsort(A, lo, r)
  qsort(A, r + 1, hi)
}


function swap(A, i, j) {
  let t = A[i]
  A[i] = A[j]
  A[j] = t
}

function partition(A, lo, hi){
  const pivot = A[hi - 1]
  let i = lo
  let j = hi - 1
  for(let k = lo; k < hi; k++) {
    if(A[k] <= pivot) {i++}
    else {
      swap(A, i, --j)
    }
  }
  swap(A, hi - 1, j)
  return j
}

module.exports = qsort