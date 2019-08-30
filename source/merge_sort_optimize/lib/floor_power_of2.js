function floor_power_of2(x) {
  return 1 << Math.floor( Math.log2(x) )
}

module.exports = floor_power_of2