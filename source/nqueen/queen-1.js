function queen(n, decisions = [], hset = {}) {

  if(decisions.length === n ) {
    decisions.sort((a,b)=>a-b)
    const hash = decisions.join('-')
    if(hset[hash]) {return []}
    hset[hash]=1
    return [decisions]
  }

  let r = []
  for(let i = 0; i < n*n; i++) {
    if(decisions.indexOf(i) === -1) {
      if ( decisions.every(j => compatible(j, i, n)) ){
        r = r.concat(queen(n, decisions.concat(i), hset))
      }
    }
  }
  return r
}

function compatible(p, q, n) {
  const [x1, y1] = [~~(p/n), p % n]
  const [x2, y2] = [~~(q/n), q % n]
  return x1 !== x2 && y1 !== y2 && Math.abs(x1-x2) !== Math.abs(y1-y2)
}

console.log(queen(7))