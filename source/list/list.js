function ListNode(key){
  this.key = key
  this.next = null
}

class LinkedList{
  constructor(){
    this.head = null
  }
  find(node) {
    let p = this.head
    while(p && p !== node) {
      p = p.next
    }
    return p
  }

  insert(node) {
    if(this.head !== null) {
      node.next = this.head
    }
    this.head = node
  }

  print() {
    let p = this.head
    const list = ['H']
    while(p) {
      list.push(p.key)
      p = p.next
    }
    console.log(list.join('->'))
  }

  reverse(){
    let p = null
    let q = this.head 
    while (q) {
      const t = q.next
      q.next = p
      p = q
      this.head = q
      q = t
    }
  }


  reverse(p = this.head) {
    if (p.next) {
      this.reverse(p.next)
      p.next.next = p
      p.next = null
    } else {
      this.head = p
    }
  }

}


const list = new LinkedList()
const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(3)
const n4 = new ListNode(4)

list.insert(n4)
list.insert(n3)
list.insert(n2)
list.insert(n1)
list.reverse()


console.log(list)
list.print()

