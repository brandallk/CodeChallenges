
function MeanMode(arr) { 

    var counts = []
    arr.forEach( num => {
        if (!counts.find( numObj => numObj.number === num) ) {
            counts.push({number: num, count: 1})
        } else {
            counts.find( numObj => numObj.number === num ).count += 1
        }
    })
    
    var mode = counts.find( numObj => numObj.count === Math.max( ...(counts.map( numObj => numObj.count)) ) ).number
    
    var mean = arr.reduce( (acc, num) => acc + num ) / arr.length
    
    return (mode === mean) ? 1 : 0
  }

  console.log(MeanMode([1,2,3]))    // => 0
  console.log(MeanMode([1,2,2,3]))    // => 1
  