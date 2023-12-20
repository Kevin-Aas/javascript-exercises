const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach(function(elmt) {
    sum += elmt;
  });
  return sum;
};

const multiply = function(arr) {
  let prod = 1;
  arr.forEach((elmt) => prod *= elmt);
  return prod;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if (a === 0) {
    return 1;
  }
  let res = a;
  for (let i=a-1; i>0; i--) {
    res *= i;
  };
  return res;
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
