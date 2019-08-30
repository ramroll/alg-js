/**
 * 插入排序
 */
function insertion_sort(A, start, end){
  for(let i = start+1; i < end; i++) {
    let p = i - 1
    const x = A[i]
    while (p >= 0 && A[p] > x) {
      A[p + 1] = A[p]
      p--
    }
    A[p + 1] = x
  }
}

module.exports = insertion_sort