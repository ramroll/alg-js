const merge = require('./lib/merge')
const Timer = require('./lib/timer')
const gen = require('./lib/number_generator')

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

const timer = new Timer()
const C = 100
for(let i = 0; i < C ; i++) {
  const numbers = gen(100000)
  timer.start()
  merge_sort(numbers, 0, numbers.length)
  timer.pause()
}

console.log( (timer.acc / (1e6 * C) ) + 'ms' )
