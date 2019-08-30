function parse(str) {
  return str.split('&').reduce((o, kv) => {
    const [key, value] = kv.split('=')
    if(!value) {
      return o
    }
    //o[key] = value
    deep_set(o, key.split(/[\[\]]/g).filter(x=>x), value)
    return o
  }, {})
}

function deep_set(o, path, value) {
  let i = 0
  for(; i < path.length - 1; i++) {
    if(o[path[i]] === undefined) {
      if(path[i+1].match(/^\d+$/)) {
        o[path[i]] = []
      } else {
        o[path[i]] = {}
      }
    }
    o = o[path[i]]
  }
  o[path[i]] = value
}

console.log(parse('a=1&b=&c=5&f=hello'))
console.log(parse('a&b&c'))
console.log(parse('a[name]=fox&a[company]=tecent&b=why'))
console.log(parse('color=Deep%20Blue'))
console.log(parse('a[0]=1&a[1]=2'))