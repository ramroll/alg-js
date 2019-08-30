

const load_1000w = require('./lib/load_1000w')
const rotate = require('./lib/rotate')
const floor_power_of2 = require('./lib/floor_power_of2')
const insertion_sort = require('./lib/insertion_sort')
const Timer = require('./lib/timer')
const gen = require('./lib/number_generator')
const merge = require('./lib/merge')



function merge_sort(A) {
  const p2 = floor_power_of2(A.length)
  const scale = A.length / p2


  for(let i = 0; i < p2; i+=2) {
    start = Math.floor(i * scale)
    end = Math.floor( start + 2 * scale)
    if(end - start === 2 && A[end -1] < A[start])  {
      [A[start], A[end-1]] = [ A[end-1], A[start] ]
    }
  }

  for(let i = 2; i < p2; i+=i) {
    for(let m = 0; m < p2; m += i * 2) {
      const start = Math.floor( m * scale )
      const mid = Math.floor( (m + i) * scale )
      const end = Math.floor( (m + i * 2) * scale  )
      if(A[end-1] < A[start] && (end - start) > 100) {
        rotate(A, mid - start, start, end )
      } else {
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

console.log( (timer.getMsAcc() / C) + 'ms' )
