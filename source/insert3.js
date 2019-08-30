function insert(A, x) {
  // p 指向下一个需要比较的元素
  // p+1 指向空位
  let p = A.length - 1

  while(p >= 0 && A[p] > x) {
    A[p+1] = A[p]
    p--
  }
  A[p + 1] = x
}

const A = [2,4,7,9,13] // 原数组
const x = 8 // 需要插入的元素
insert(A, x)
console.log(A)
