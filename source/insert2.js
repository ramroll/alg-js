function insert(A, x) {
  const b = A.find(a => a > 8)
  const idx = A.indexOf(b) 
  A.splice(idx === -1 ? A.length : idx, 0, x)
}

const A = [2,4,7,9,13] // 原数组
const x = 8 // 需要插入的元素
insert(A, x)

console.log(A)

