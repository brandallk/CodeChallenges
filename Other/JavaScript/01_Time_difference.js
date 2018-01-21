/* Have the function timeDiff(time1, time2) take two 
string parameters in a form like "11:28 pm" and return the time difference between them as an object with two attributes: 'hours' and 'minutes'. */


function parseHrs(timeStr) {
    var period = timeStr.match(/\wm/i)[0];
    var hours = parseInt(timeStr.match(/^(\d+)\:/)[1]);
    if (period === "pm") {
        hours += 12;
    }
    return hours;
}

function parseMins(timeStr) {
    return parseInt(timeStr.match(/\:(\d+)/)[1]);
}

function timeDiff(time1, time2) {
    var minutes1 = (parseHrs(time1) * 60) + parseMins(time1);
    var minutes2 = (parseHrs(time2) * 60) + parseMins(time2);
    var diffMinutes = Math.abs(minutes1 - minutes2);
    return {hours: Math.floor(diffMinutes/60), minutes: diffMinutes % 60};
}

console.log(timeDiff("2:15 am", "4:25 pm"));    // => {hours: 14, minutes: 10}
console.log(timeDiff("2:15 pm", "4:25 am"));    // => {hours: 9, minutes: 50}
