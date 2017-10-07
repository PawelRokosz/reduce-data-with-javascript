//2.5.1
// var data = [1, 2, 3, 4];
//
// function reducer(accumulator, value) {
//   return accumulator + value;
// }
//
// var sum = data.reduce(reducer, 0);
// console.log(sum);

//2.5.2
var data = ['vote1', 'vote2', 'vote1', 'vote2'];
function reducer(accumulator, value) {
  if (accumulator[value]) {
    accumulator[value] = accumulator[value] + 1;
  } else {
    accumulator[value] = 1;
  }
  return accumulator;
}

var tally = data.reduce(reducer, []);

console.log(tally);
