function floor_power_of_two(x) {
  x = x | (x >> 1)
  x = x | (x >> 2)
  x = x | (x >> 4)
  x = x | (x >> 8)
  x = x | (x >> 16)
  x = x | (x >> 32)
  return x - (x >> 1)
}

function block_sort(A) {
  const power_of_two = floor_power_of_two(A.length)
  const scale = A.length / power_of_two
  console.log(power_of_two, scale)

  for(let merge = 0; merge < power_of_two; merge += 16) {
    const start =merge * scale
    const end = start + 16 * scale
    console.log(start, end)
  }
}


let A = []
for(let i = 0; i < 100; i++) {
  A.push(Math.random() * 500)
}

block_sort(A)