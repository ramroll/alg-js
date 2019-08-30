function counting_sort(A){
  const max = Math.max(...A)
  const count = Array(max + 1).fill(0)
  const output = Array(A.length)
  for(let i = 0; i < A.length; i++) {
    count[A[i]]++
  }
  for(let i = 1; i < count.length; i++) {
    count[i] += count[i-1]
  }
  for(let i = 0; i < A.length; i++) {
    output[count[A[i]] - 1] = A[i]
    count[A[i]] --
  }
  return output
}

console.log(counting_sort( [1,6,3,4,5,2] ) )