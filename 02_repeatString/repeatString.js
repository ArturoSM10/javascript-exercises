const repeatString = function(yourText = "No valid option", numberOfTimes = 0) {
    if (numberOfTimes<0) return 'ERROR';
    let string = '';
    for (let i = 0; i<numberOfTimes; i++) {
        string += yourText;
    }
    return string;
};
// Do not edit below this line
module.exports = repeatString;
