const merge = require('./lib/merge')
const Timer = require('./lib/timer')
const gen = require('./lib/number_generator')

function merge_sort(A, p, r){
  if(r - p < 2) { return }
  const q = Math.ceil( (p + r) / 2)
  merge_sort(A, p, q)
  merge_sort(A, q+1, r)
  merge(A,p,q,r)
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
