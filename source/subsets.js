function subsets(str, list) {
  if(list.length === str.length) {
    return [list.map((v, i) => v ? str[i] : '').join('')]
  }
  let r = []
  r = r.concat ( subsets(str, list.concat(true)) )
  r = r.concat ( subsets(str, list.concat(false)) )
  return r
}


console.log(subsets('abc', []))