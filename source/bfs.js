function Node(a) {
  this.children = []
  this.label = a
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.children.push(b)
a.children.push(c)
b.children.push(d)
b.children.push(e)
e.children.push(f)

function bfs(node) {
  const queue = [node]
  while(queue.length) {
    const item = queue.shift()
    item.children.forEach(child => queue.push(child))
  }
  

}