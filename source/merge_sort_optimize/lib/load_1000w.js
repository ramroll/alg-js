/**
 * 导入1000W数据
 */
const fs = require('fs')
const path = require('path')
function load_1000w(){
  const lines = fs.readFileSync(path.resolve(__dirname, '../1000w.txt'), 'utf-8')
  const numbers = lines.split('\n').map(x=>parseInt(x))
  numbers.pop()
  return numbers
}


module.exports = load_1000w