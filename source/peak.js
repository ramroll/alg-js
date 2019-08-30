
function is_peak(A, g) {
  return ( g === 0 || A[g] >= A[g-1] )
    && (g === A.length - 1 || A[g] >= A[g+1])
}
// function peak(A) {
//   let l = 0,
//       r = A.length - 1,
//       guess

//   while(l <= r) {
//     const guess = Math.floor( (l+r) / 2)
//     if(is_peak(A, guess)) {
//       return guess
//     }

//     if(A[guess] < A[guess - 1]) {
//       r = guess - 1
//     }
//     else if(A[guess] < A[guess + 1]) {
//       l = guess + 1
//     }
//   }
// }


function peak(A, l = 0, r = A.length -1) {
  if(l <= r) {
    const guess = Math.floor((l + r) / 2)
    if(is_peak(A, guess)) {
      return guess
    }
    if ( A[guess] < A[guess - 1]  ){
      return peak(A, l, guess - 1)
    }
    else if ( A[guess] < A[guess + 1]) {
      return peak(A, guess + 1, r)
    }
  }
}

peak([1,2,3,4,5,6])  // 5(6所在的位置）
peak([1,3,5,7,4,2]) // 3（7所在的位置）
peak([1,2,3,2,7,6]) // 2(3所在的位置)
peak([1,1,1,1,1,1]) // 任何一个都是峰值