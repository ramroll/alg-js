function isMerge(s, p1, p2) {

  // i = 0, j = 0, k = 0
  const a = [[0, 0, 0]]

  while(a.length > 0) {
    const [i, j, k] = a.pop()

    if( i === p1.length && j === p2.length && k === s.length && i + j === k) {
      return true
    }

    const c = s[k]
    const c1 = p1[i]
    const c2 = p2[j]

    if (c === c1 && c1 !== undefined) {
      a.push([i + 1, j, k + 1])
      continue
    }
    if (c === c2 && c2 !== undefined) {
      a.push([i, j + 1, k + 1])
      continue
    }
  }
  return false

}




function isMerge(s, part1, part2) {
  return !s ? !(part1 || part2) :
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}

console.log(isMerge('abc', 'ad', 'bc'))