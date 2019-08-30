class Queue{
  constructor(){
    this.s1 = []
    this.s2 = []
  }
  // 入队
  enqueue(item){
    this.s1.push(item)
  }
  // 出队
  dequeue(){
    while(this.s1.length > 0) {
      this.s2.push(this.s1.pop())
    }
    if(this.s2.length > 0) {
      return this.s2.pop()
    }
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
console.log(queue.dequeue())
console.log(queue.dequeue())