

// const A = Array(1000000).fill(0)

// const A = []
// for(let i = 0; i < 10000000; i++){
//   A[i] = Math.random() 
// }


function print_memory_usage(h){
  const used = process.memoryUsage().heapUsed / 1024 / 1024
  console.log(h, 'mem:' + used + 'mb')
}

print_memory_usage()

// console.log(A)
