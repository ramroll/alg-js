const A = [2,4,7,9,13] // 原数组
const x = 8 // 需要插入的元素
// b代表第一个大于x的数字 
const b = A.find(a => a > x)
// b === undefined 代表所有元素都比8小
if( b=== undefined) {
  A.push(x)
} else {
  const idx = A.indexOf(b)
  A.splice(idx, 0, x)
}
// 5-11行还可以优化吗？
console.log(A)

