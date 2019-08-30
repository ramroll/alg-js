function swap(A, i, j){
  [A[i],A[j]] = [A[j], A[i]]
}
function partition(A, lo, hi) {
  const pivot = A[hi - 1]
  let i = lo, j = hi - 1
  while(i !== j) {
    A[i] <= pivot ? i++ : swap(A, i, --j)
  }
  swap(A, j, hi-1)
  return j
}

function qsort(A, lo = 0, hi = A.length) {
  if(hi - lo <= 1) return
  const p = partition(A, lo, hi)
  qsort(A, lo, p)
  qsort(A, p+1, hi)
}

const A = [10, 80, 30, 90, 40, 50, 70]
qsort(A)
console.log(A)
