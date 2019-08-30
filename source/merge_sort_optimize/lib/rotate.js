/**
 * 旋转数组
 */
function reverse(A, start, end){
  for(let i = 0; i < (end - start + 1) / 2; i++) {
    const t = A[start + i]
    A[start + i] = A[end - i]
    A[end-i] = t
  }
}

function rotate(A, amount, start, end){
  reverse(A, start, end  - 1)
  reverse(A, start, start + amount - 1)
  reverse(A, start + amount, end - 1)
}


// const A = [5,6,7, 1,2,3,4]
// rotate(A, 4, 0, 7)
// console.log(A)

module.exports = rotate