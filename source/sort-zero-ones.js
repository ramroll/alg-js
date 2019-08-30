const HR = require('./merge_sort_optimize/lib/hr')
function swap(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]]
}

function sort(A){
  let lo = 0,
      mid = 0,
      hi = A.length - 1

  while(mid <= hi) {
    switch(A[mid]) {
      case 0 :
        swap(A, lo++, mid++)
        break
       case 1:
        mid++
        break
       case 2:
        swap(A, mid, hi--)
        break

    }

    // 循环不变式
    // lo : [0, lo) 是0
    // hi : [hi+1, n) 是2
    // [lo, mid) 是 1
    // [mid, hi) 未排序
  }
}


function random1Gnumber() {

  let seed = 0
  const numbers = new Array(100000000)
  for(let i = 0; i < 100000000; i++) {
    const x = Math.floor( Math.random() * 3 )
    numbers[i] = x
  }
  return numbers
}

const A = random1Gnumber()

const hr = new HR()
hr.start()
sort(A)

hr.end()
hr.print()