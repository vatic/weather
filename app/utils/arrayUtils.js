
export function reduceArrayByEqualKeys(ary, key, fn) {
  var res = ary.reduce( (prev, curr, index, ary) => {
    var d1 = fn(curr[key]);
    var d2 = ( index === 0 ) ? null : fn(ary[index-1][key]);
    if(d1 === d2) {
      return [ ...prev.slice(0, prev.length-1), [...prev[prev.length-1], curr] ]
      /*
      prev[prev.length-1].push(curr);
      return prev;
      */
    } else {
      return [ ...prev, [curr] ]
      /*
      prev.push([curr]);
      return prev;
      */
    }
    }, [[]]
  )
  res.shift()
  return res
}
