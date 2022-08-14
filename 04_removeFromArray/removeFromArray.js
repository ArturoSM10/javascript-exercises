const removeFromArray = function(...string) {
    let arrayRemoved = string[0];
    return arrayRemoved.filter(numero => !string.includes(numero));
};

// Do not edit below this line
module.exports = removeFromArray;
