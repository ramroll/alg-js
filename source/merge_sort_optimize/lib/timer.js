/**
 * 计时器
 */
const NS_PER_SEC = 1e9
class Timer {
  constructor(){
    this.acc = 0
  }

  start(){
    this.startAt = process.hrtime()
  }

  isStarted() {
    return !!this.startAt
  }
  end(){
    this.pause()
  }
  pause(){
    const diff = process.hrtime(this.startAt)
    const nano = diff[0] * NS_PER_SEC + diff[1]
    this.acc += nano
  }
  getMsAcc() {
    return (this.acc / 1e6)
  }
  print() {
    console.log(`execution take ${this.acc/1e6}ms` )
  }
}

module.exports = Timer