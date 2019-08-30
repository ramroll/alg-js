class Stack{
  constructor(max=1000){
    this.max = max
    this.sp = -1
    this.data = Array(max)
  }
  push(item){
    if(this.sp === this.max - 1) {
      throw 'Stack Overflow'
    }
    this.data[++this.sp] = item
  }

  pop(){
    if(this.sp === -1) {
      throw 'Stack Underflow'
    }
    return this.data[this.sp--]
  }

}


const stack = new Stack(4)

for(let i = 0; i < 4; i++) {
  stack.push(i)
}

console.log( stack.pop() )
console.log( stack.pop() )
console.log( stack.pop() )
console.log( stack.pop() )
