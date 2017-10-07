function increment(input) {return input + 1;}
function decrement(input) {return input - 1;}
function double(input) {return input * 2;}
function halve(input) {return input / 2;}

var initialValue = 1;

// var incremented_value = increment(initialValue);
// var doubled_value = double(incremented_value);
// var final_value = decrement(doubled_value);

// function transform(input) {
//   return ((input + 1) * 2) - 1;
// }

var pipeline = [
  increment,
  double,
  decrement
]

// var final_value = transform(initialValue);

var final_value = pipeline.reduce(function(acc, fn) {
  return fn(acc);
}, initialValue);
console.log(final_value);
