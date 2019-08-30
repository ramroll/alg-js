const fs = require('fs')
const path = require('path')
const qsort = require('./qsort')

const NUM = 32

/**
 * 按照blocksize大小去读取数据
 * @param {*} blocksize 
 * @param {*} k 开始block的位置
 */
function load(blocksize, offset){

  const rstream = fs.createReadStream(
    path.resolve(__dirname, './raw'), {
      start: offset,
      end: offset + blocksize * 4 - 1,
    })

  return new Promise((resolve) => {
    const numbers = Array(blocksize).fill(0)
    let total = 0
    rstream.on('data', buffer => {
      const N = buffer.length / 4
      for (let i = 0; i < N; i++) {
        const number = buffer.readInt32BE(i * 4)
        numbers[total ++ ] = number
      }

      if(total === blocksize) {
        resolve(numbers)
      }
    })

  })
}

function print_memory_usage(h){
  const used = process.memoryUsage().heapUsed / 1024 / 1024
  console.log(h, 'mem:' + used + 'mb')
}

function write(filename, offset, numbers) {

  const BUFFERSIZE = Math.min(numbers.length, 1024*1024)
  const buffer = Buffer.alloc(BUFFERSIZE * 4)
  const wstream = fs.createWriteStream(path.resolve(__dirname, filename), {
    start: offset 
  })

  return new Promise( resolve => {
    for(let i = 0; i < numbers.length; i++) {
      const writeBackOffset = i % (BUFFERSIZE)
      buffer.writeInt32BE(numbers[i], writeBackOffset * 4)
      if(i !== 0 && (i % (BUFFERSIZE) === 0) ) {
        wstream.write(buffer)
      }
    }
    wstream.write(buffer)
    wstream.end()
    resolve()
  })
}


async function sort(total) {

  const BLOCKSIZE = total / 32 
  console.log(`总计排序:${total},缓冲区大小:${BLOCKSIZE}`)

  // 每次读取32M数据，然后排序，再回写
  for(let i = 0; i < NUM; i++) {
    const numbers = await load(BLOCKSIZE, BLOCKSIZE * i * 4)
    qsort(numbers)
    await write('./sorted', BLOCKSIZE * i * 4, numbers)
    print_memory_usage(`sort block ${i}`)
  }


  console.log('分区sort执行完成')
  // 工作队列

  console.log('创建工作队列...')
  const list = [...Array(NUM)].map(x => [])

  // 小区快大小
  const PIECESIZE = total / 1024

  // 指针x：指向每个小区块中下一个要写入的整数位置
  // 指针y：每个BLOCK已经加载小区块数量
  const x = Array(NUM).fill(PIECESIZE)
  const y = Array(NUM).fill(0)

  // 回写整数的个数
  let c = 0 


  // 回写缓冲区
  const buffer = Array(BLOCKSIZE) 

  while(c <= total) {
    // 检查工作队列中的每个小区块，没有数据就从磁盘读取
    for(let i = 0; i < NUM; i++) {
      // 如果为空，加载数据
      if(x[i] === PIECESIZE) {
        const numbers = await load(PIECESIZE, i * 32 + y[i])
        console.log(`读取小区块 i=${i}, x[i]=${x[i]}, y[i]=${y[i]}`)
        list[i] = numbers
        y[i]++
        x[i]=0
      }
    }

    // 在工作区块的数据中找到最大值
    let max = -1
    let max_idx = -1
    for(let i = 0; i < NUM; i++) {
      if(list[i][x[i]] > max) {
        max = list[i][x[i]]
        max_idx = i
      }
    }

    x[max_idx]++

    const writeBackOffset = c % BLOCKSIZE
    buffer[writeBackOffset] = max

    // 如果缓冲区满，回写所有数据
    if(c !== 0 && ( c % BLOCKSIZE === 0 || (c === total - 1))) {
      const k = Math.floor( c / BLOCKSIZE )
      console.log('回写缓冲区', k, BLOCKSIZE, buffer.length)
      await write('./final', BLOCKSIZE*k*4, buffer)
    }
    c++
  }

}





sort(1024*1024*32)