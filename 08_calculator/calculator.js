const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  if (arr.length === 0) return 0;
	return arr.reduce((count, num) => count + num)
};

const multiply = function(arr) {
  return arr.reduce((count, num) => count * num)
};

const power = function(base, exponent) {
  let count = 1;
	for (let i = 0; i < exponent; ++i) {
    count = count * base;
  }
  return count;
};

const factorial = function(num) {
	let count = 1;
  for (let i = 2; i <= num; ++i) {
    count = count * i;
  }
  return count;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
