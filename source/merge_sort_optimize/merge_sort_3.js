

const load_1000w = require('./lib/load_1000w')
const merge = require('./lib/merge')
const floor_power_of2 = require('./lib/floor_power_of2')
const Timer = require('./lib/timer')
const gen = require('./lib/number_generator')


function merge_sort(A) {
  const p2 = floor_power_of2(A.length)
  const scale = A.length / p2

  /* 在合并排序发生前，先将最底层需要两两和并的部分合并 */
  for(let j = scale; j <= A.length; j+=scale) {
    const start = Math.floor(j-scale)
    const end = Math.floor(j)
    if(end - start === 2) {
      merge(A, start, start+1, end)
    }
  }

  for(let i = 1; i < p2; i+=i) {
    for(let m = 0; m < p2; m += i * 2) {
      const start = Math.floor( m * scale )
      const mid = Math.floor( (m + i) * scale )
      const end = Math.floor( (m + i * 2) * scale  )
      merge(A, start, mid, end)
    }
  }
}


const A = [25, 26, 2, 3, 9, 82, 5]
merge_sort(A)
console.log(A)

// const timer = new Timer()
// const C = 100
// for(let i = 0; i < C ; i++) {
//   const numbers = gen(100000)
//   timer.start()
//   merge_sort(numbers, 0, numbers.length)
//   timer.pause()
// }

// console.log( (timer.acc / (1e6 * C) ) + 'ms' )
