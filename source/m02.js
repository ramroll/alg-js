function merge_sort(A) {
  const p2 = floor_power_of2(A.length)
  const scale = A.length / p2

  for(let i = 1; i < p2; i+=i) {
    for(let m = 0; m < p2; m += i * 2) {
      const start = Math.floor( m * scale )
      const mid = Math.floor( (m + i) * scale )
      const end = Math.floor( (m + i * 2) * scale  )
      merge(A, start, mid, end)
    }
  }
}