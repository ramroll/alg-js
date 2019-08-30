function radix_sort(A){
  const max = Math.max(...A)
  const buckets = Array.from({ length: 10 }, () => [])
  // 有效数位
  let m = 1
  while(m < max) {
    // 将数组放入桶中
    A.forEach( number => {
      const digit = ~~ ( ( number % (m * 10) ) / m )
      buckets[digit].push(number)
    })
    // 从桶中取出元素
    let j = 0
    buckets.forEach(bucket => {
      while(bucket.length > 0) {
        A[j++] = bucket.shift()
      }
    })
    // 下一个位置
    m *= 10
  }
}

const A = [10, 200,13,12, 7, 88,91, 24]
radix_sort(A)
console.log(A)