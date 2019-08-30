function parse(str) {
  return str.split('&').reduce((o, kv) => {
    const [key, value] = kv.split('=')
    if(!value) {
      return o
    }
    o[key] = value
    return o
  }, {})
}

console.log(parse('a=1&b=&c=5&f=hello'))
console.log(parse('a&b&c'))
console.log(parse('a[name]=fox&a[company]=tecent&b=why'))
console.log(parse('color=Deep%20Blue'))
console.log(parse('a[0]=1&a[1]=2'))