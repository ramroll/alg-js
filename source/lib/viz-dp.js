


function viz(A, columns) {

  const lines = A.map(list => {
    return list.map(x => x ? '✓' : 'x').join('  ')
  })

  const header = '  ' + [...Array(A[0].length)].map((_, i) => i.toString().padEnd(2, ' '))
    .join(' ')
  console.log(header)

  lines.forEach( (l, i) => {
    if( i !== 0) {

    }
    if( i === 0) {

      console.log('  ' + l)
    } else {
      console.log(columns[i - 1] + ' ' + l)
    }
  })

}

module.exports = viz