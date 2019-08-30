/**
 * @param {*} maze //地图
 * @param {*} pos  //当前位置
 * @param {*} path //开始位置到当前位置走过的点
 * @param {*} transverse  //遍历过的节点
 */
function rat_in_maze(
  maze, 
  pos = [0, 0],
  path = [[...pos]], 
  transverse = [] 
) {
  const [x, y] = pos 
  // 如果找到终点
  if (maze[x][y] === 2) {
    return path
  }
  // 记录走过当前位置
  transverse[x * maze.length + y] = 1
  // 找到可能的选择
  const choices = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]
    // 过滤掉墙和已经遍历的地方
    .filter(([x, y]) => {
      return x >= 0 && y >= 0 && x < maze.length &&
        y < maze[0].length 
        && (maze[x][y] !== 1) &&
        !transverse[x*maze.length + y]
    })

  // 对每个选择，继续递归，寻找路径
  for(let [x, y] of choices) {
    const p = rat_in_maze(maze, [x, y], path.concat([[x, y]]), transverse)
    if(p) return p
  }
}

function print(maze, path) {
  maze.forEach((row, i) => {
    console.log(row.map((v, j) => {
      if (path.find(([x, y]) => ( x === i && y === j) )) {
        return 'x'
      }
      return v
    }).join(' ')
    )
  })
}

const maze = [
  [0,1,0,0,0,0],
  [0,1,0,1,1,0],
  [0,0,0,1,0,1],
  [1,1,0,0,0,1],
  [0,0,0,1,1,1],
  [2,1,0,0,0,0]
]
console.log ( print( maze, rat_in_maze(maze)))