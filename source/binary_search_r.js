function bsearch(A, p, r, x){
  const guess = Math.floor( (r - p) / 2 )
  console.log(guess)
  if(p >= r) {return -1}
  if( A[guess] === x ) return guess
  return A[guess] > x ? bsearch(A, guess + 1, r, x)
    : bsearch(A, p, guess - 1, x )
}

