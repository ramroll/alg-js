function * subsets(S) {
  for(let i = 0; i < 1 << S.length; i++) {
    let s = [] 
    for(let k = 0; k < S.length; k++) {
      const take = i & (1 << k)
      take && s.push(S[k])
    }
    yield s.join('')
  }
}

const S = ['a', 'b', 'c']
console.log([...subsets(S)])