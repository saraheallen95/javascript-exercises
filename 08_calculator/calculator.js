const add = function(x, y) {
  let addResult = 0;
  addResult = x + y;
  return addResult;
	
};

const subtract = function(x, y) {

	return (x - y);

};

const sum = function(x, y) {

  let sumResult = 0;
  let args = arguments[0].slice();
  let argsLength = args.length;

  for (let i = 0; i < argsLength; i++)
    {
      sumResult += args[i];
    }
    
    return sumResult;

};

const multiply = function(x, y) {
 
  let args = arguments[0].slice();
  let xTimesY = args[0];
  args.shift();
  let argsLength = args.length;

  for (let i = 0; i < argsLength; i++) {
      xTimesY *= args[i];
  }

  return xTimesY;

};

const power = function(x, y) {

  let xPowerY = x;

  if (y == 0) {
    return 1;
  }
 
  else {
  for (i = 1; i < y; i++) {
    xPowerY *= x;
  }
  return xPowerY;}
	
};

const factorial = function(num) {

	let factorial = num;
  let counter = num;

  if (num != 0) {
     for (i = 1; i < counter; i++) {
     factorial = factorial * (num - 1);
      num = num - 1;
      }
    return factorial;
  }

  else {
    return 1;
  }

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
