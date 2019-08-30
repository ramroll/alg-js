function permutation(str, decisions) {
  if(list.length === str.length) {
    return [ list.map(i => str[i]).join('') ]
  }

  let r = []
  for(let i = 0; i < str.length ; i++) {
    if(list.indexOf(i) === -1) {
      r = r.concat( permutation(str, list.concat(i)) ) 
    }
  }
  return r
}

function permutation1(str, select = []) {
  if(select.length === str.length) {
    return select.map(i=>str[i]).join('')
  }

  let r = []
  for(let i = 0; i < str.length; i++) {
    if(select.indexOf(i) === -1) {
      r = r.concat( permutation1(str, select.concat(i)) )
    }
  }
  return r 
}

function permutation2(str, select = [], left = [...str]) {
  if(left.length === 0) {
    return select.join('') 
  }

  return [].concat( ...left.map( (c, i) => permutation2(
    str,
    select.concat(c),
    left.slice(0, i).concat(left.slice(i+1))
  )))
}

console.log(permutation1('abc'))

// const t = new Date()
// permutation2('abcefghijk')
// const d1 = new Date().getTime() - t.getTime()

// console.log(d1/1000 + 's')
// const t1 = new Date()
// console.log(permutation1('abcdefghijk'))
// const d2 = new Date().getTime() - t1.getTime()

// console.log(d2/1000 + 's')