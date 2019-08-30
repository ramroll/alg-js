function insertion_sort(A){
  for(let i = 1; i < A.length; i++) {
    let p = i - 1
    const x = A[p+1]
    while(p >= 0 && A[p] > x) {
      A[p+1] = A[p]
      p--
    }
    A[p + 1] = x
  }
}
function bucket_sort(A, k, S) {
  const buckets = Array.from({length : k}, () => [])
  // 放入桶中
  for(let i = 0; i < A.length; i++){
    const index = ~~(A[i] / S)
    buckets[index].push(A[i])
  }
  // 排序每只桶
  for(let i = 0; i < buckets.length; i++) {
    insertion_sort( buckets[i] )
  }
  // 取出数据
  return [].concat(...buckets)
}
const A = [29, 25, 3, 49, 9, 37, 21, 43]
console.log( bucket_sort(A, 5, 10) )