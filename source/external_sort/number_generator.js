/**
 * 生成10亿个数字
 */
const fs = require('fs')
const path = require('path')

function gen(N){
  const wstream = fs.createWriteStream(path.resolve(__dirname, './raw'))
  const items = []
  const SIZE = 1024 * 1024
  const buffer = Buffer.alloc(4*SIZE)

  for(let i = 0; i <= N ; i++) {

    if (i !== N) {
      const v = Math.floor( Math.random() * 0xffff )
      buffer.writeUInt32BE(
        v ,
        (i % SIZE) * 4
      )
    }

    if(i !== 0 && i % SIZE === 0) {
      console.log(`write ${i}/${N}`)
      wstream.write(buffer)
    }
  }
  wstream.end()
}


// function print() {
//   const buffer = new Buffer(16*4)
//   const rstream = fs.createReadStream(path.resolve(__dirname, './raw'))

//   let sum = 0

//   rstream.on('data', (buffer) => {
//     sum += chunk.length
//     console.log(chunk)
//   })
// }



gen(1024*1024*1024)

module.exports = gen