const ftoc = function(temp) {
  let rounded = ((temp-32)/1.8);
  return Math.round(rounded * 10) / 10;;
};

const ctof = function(temp) {
  let rounded = ((temp*1.8)+32)
  return Math.round(rounded * 10) / 10;;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
