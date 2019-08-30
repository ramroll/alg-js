function queen(n, decisions = []) {

  if(decisions.length === n ) {
    return is_goal(n, decisions) ? [decisions] : []
  }
  let r = []
  for(let i = 0; i < n*n; i++) {
    if(decisions.indexOf(i) === -1) {
      r = r.concat( queen(n, decisions.concat(i)) )
    }
  }
  return r
}

function compatible(p, q, n) {
  const [x1, y1] = [~~(p/n), p % n]
  const [x2, y2] = [~~(q/n), q % n]
  return x1 !== x2 && y1 !== y2 && Math.abs(x1-x2) !== Math.abs(y1-y2)
}

function is_goal(n, decisions) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if(i === j) { continue }
      const p = decisions[i]
      const q = decisions[j]
      if(!compatible(p, q, n)) {
        return false
      }
    }
  }
  return true
}

console.log(queen(4))