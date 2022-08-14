const sumAll = function(numberStart, numberEnd) {
    let result = 0;
    if (numberStart>numberEnd) {
        for (let i = numberEnd; i <= numberStart; i++) {
            result += i;
        }
    }
    else if (numberStart < 0 || numberEnd < 0 || typeof(numberStart) !== 'number' || typeof(numberEnd) !== 'number') {
        return `ERROR`
    }
    else {
        for (let i = numberStart; i <= numberEnd; i++) {
            result += i;
        }
    }
    return result;
};
// Do not edit below this line
module.exports = sumAll;

