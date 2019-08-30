
function random1Gnumber() {

  let seed = 0
  const numbers = new Array(100000000)
  for(let i = 0; i < 100000000; i++) {
    // const x = Math.floor( Math.random() * 3 )
    // seed = seed + Math.E
    numbers[i] = i
  }
  return numbers
}


const numbers = random1Gnumber()
// console.log(numbers)