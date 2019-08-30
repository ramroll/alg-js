/**
 * 生成1000W个数字
 */
const fs = require('fs')
function gen(N){

  const items = []
  for(let i = 0; i < N ; i++) {
    items.push ( Math.floor( Math.random() * 1000000) )
  }
  return items
}

module.exports = gen