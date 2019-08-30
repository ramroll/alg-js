function merge_sort(A) {
  for(let i = 1; i < A.length; i+=i) {
    const step = i * 2
    for (let start = 0; start < A.length; start += step) {
      const end = Math.min( start + step, A.length)
      if (end - start > 1) {
        const mid = start + i
        merge(A, start, mid, end)
      }
    }
  }
}