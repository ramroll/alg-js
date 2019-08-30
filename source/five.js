class Five{

  constructor(){
    // 棋盘
    this.board = Array(13*13).fill(0)

    // 搜索范围
    this.searching = []

    // 该谁下
    this.turn = 1 // 1-黑 2-白
  }


  /**
   * 放置一颗棋子
   */
  put(x) {
    this._put(x)
    const next = this.ai()
    this._put(next)
  }

  _put(x) {
    this.board[x] = this.turn
    const area = searching_area(x)
    this.searching = this.searching.filter(i => i !== x)
    area.forEach(i => {
      if (this.searching.indexOf(i) === -1) {
        this.searching.push(i)
      }
    })
    this.turn = (this.turn === 1) ? 2 : 1
  }

  /**
   * AI提示
   * @returns 坐标
   */
  ai() {
    const searching = this.searching.slice()
  }
}


function searching_area(i) {
  const [x, y] = [~~(i/13), i % 13]

  let points = []
  for(let i=x-2; i<=x+2; i++) {
    for(let j=y-2;j<=y+2;j++) {
      if(i !== x && j !== y) {
        points.push(i * 13 + j)
      }
    }
  }
  return points

}