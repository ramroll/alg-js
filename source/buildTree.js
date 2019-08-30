const arr = [
  { id: 1, name: "i1" },
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 7, name: "i7", parentId: 3 },
  { id: 8, name: "i8", parentId: 7 },
  { id: 9, name: "i9", parentId: 7 },
]

function buildTree(arr) {
  const childrenOf = {}
  arr.forEach(item => {
    if ( !childrenOf[item.parentId || 0] ){
      childrenOf[item.parentId || 0] = []
    }
    childrenOf[item.parentId || 0].push(item)
  })

  function inner(item = arr.find(x => !x.parentId)){
    return {
      id: item.id,
      name: item.name,
      children: (childrenOf[item.id || 0] || [])
        .map(child => inner(child))
    }

  }
  return inner()
}

function printTree(node, i = 0) {
  console.log(node.name.padStart(i * 2 + 4, ' '))
  node.children.forEach(x => printTree(x, i + 1))
}
printTree(buildTree(arr))
