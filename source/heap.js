function swap(A, i, j) {
  const t = A[i]
  A[i] = A[j]
  A[j] = t
}
class MaxHeap{
  constructor(data){
    this.list = data
    this.heapSize = data.length
    this.build()
  }

  build(){
    let i = Math.floor(this.heapSize/2) - 1
    while(i >= 0) {
      this.max_heapify(i--)
    }
  }

  extract() {
    if (this.heapSize === 0) return null
    const item = this.list[0]
    swap(this.list, 0, this.heapSize - 1)
    this.heapSize--
    this.max_heapify(0)
    return item
  }

  add(key){
    this.list[this.heapSize++] = -Infinity 
    this.increase(this.heapSize -1, key)
  }

  increase(i, key) {
    let p = ~~Math.floor(i/2)  
    let q = i 
    this.list[i] = key
    while(this.list[p] < this.list[q]) {
      console.log('here')
      swap(this.list, p, q)
      q = p
      p = ~~Math.floor(p / 2)
    }
  }


  max_heapify(i) {
    const leftIndex = 2*i + 1
    const rightIndex = 2*i + 2
    let maxIndex = i
    if(leftIndex < this.heapSize && this.list[leftIndex] > this.list[maxIndex]) {
      maxIndex = leftIndex
    }
    if(rightIndex < this.heapSize && this.list[rightIndex] > this.list[maxIndex]) {
      maxIndex = rightIndex
    }
    if(i !== maxIndex) {
      swap(this.list, maxIndex, i)
      this.max_heapify(maxIndex)
    }
  }
}

function heap_sort(A){
  const heap = new MaxHeap(A)
  console.log(heap.list)
  while(heap.heapSize > 0){
    A[heap.heapSize-1] = heap.extract()
  }
}

function maxk(A, k) {
  const heap = new MaxHeap(A)
  const r = []
  while(k-- > 0) {
    r.push(heap.extract())
  }
  return r
}

const A = [5,6,7,3,2,10,4,8]
console.log(maxk(A, 3))

