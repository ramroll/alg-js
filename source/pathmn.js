function f(x,y) {
  if(x > 0 && y > 0) {
    return f(x-1, y) + f(x, y - 1)
  }
  else if(x > 0) {
    return f(x-1, y)
  }
  else if(y > 0) {
    return f(x, y-1)
  }
  else {
    return 1
  }
}


console.log( f(4, 3) )