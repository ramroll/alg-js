function moveTower(disks, k,  n, from, to, use) {
  if(n === 1) {
    console.log(`${disks[k]} ${from}->${to}`)
    return
  }
  moveTower(disks, k + 1, n - 1, from ,use, to)
  console.log(`${disks[k]} ${from}->${to}`)
  moveTower(disks, k + 1, n - 1, use , to, from)
}

function solve_hanoi_tower(disks, from, to, use) {
  moveTower(disks, 0, disks.length, from, to, use)
}

solve_hanoi_tower(['i', 'j', 'k'],'A', 'B', 'C')
// solve_hanoi_tower(['h', 'i', 'j', 'k'],'A', 'B', 'C')
