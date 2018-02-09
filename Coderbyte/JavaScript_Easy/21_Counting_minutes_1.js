/* return the total number of minutes between two times */


function CountingMinutesI(str) { 

  var time1 = str.split("-")[0]
  var time1Period = time1.slice(-2)
  var time1Hours = Number(time1.split(":")[0]) == 12 ? 0 : Number(time1.split(":")[0])
  var time1Mins = Number(time1.split(":")[1].substr(0, 2))
  var time1TotalMins = time1Hours * 60 + time1Mins
  
  var time2 = str.split("-")[1]
  var time2Period = time2.slice(-2)
  var time2Hours = Number(time2.split(":")[0]) == 12 ? 0 : Number(time2.split(":")[0])
  var time2Mins = Number(time2.split(":")[1].substr(0, 2))
  var time2TotalMins = time2Hours * 60 + time2Mins
  
  
  if (time1Period !== time2Period) {
    time2TotalMins = (time2Hours + 12) * 60 + time2Mins
  } else if (time2TotalMins - time1TotalMins < 0) {
    time2TotalMins = (time2Hours + 24) * 60 + time2Mins
  }
  
  return time2TotalMins - time1TotalMins
}

console.log(CountingMinutesI("2:45am-3:15pm"))     // => "750"
console.log(CountingMinutesI("12:45pm-3:15pm"))    // => "150"
console.log(CountingMinutesI("9:45am-3:15am"))     // => "1050"


