function swap(A, i, j) {
  const t = A[i]
  A[i] = A[j]
  A[j] = t
}
function bubble_sort(A){
  for (let i = A.length - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      A[j - 1] > A[j] && swap(A, j - 1, j)
      // 循环结束j指向A[0]-A[j]中的最大值
    }
    // 循环结束A[i]-A[n-1]已排序 
  }
}

const A = [5,8,1,3,2,4,6]
bubble_sort(A)
console.log(A)