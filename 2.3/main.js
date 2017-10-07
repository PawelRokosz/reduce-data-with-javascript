//2.3.1
// var data = [1, 2, 3];
//
// var doubled = data.reduce(function(acc, value) {
//   acc.push(value * 2);
//
//   return acc;
// }, []);
// console.log(doubled);
//
// var doubleMapped = data.map(function(item) {
//   return item * 2;
// });
// console.log(doubleMapped);

//2.3.2
// var data2 = [1, 2, 3, 4, 5, 6];
//
// var evens = data2.reduce(function(acc, value) {
//   if (value % 2 === 0) {
//     acc.push(value);
//   }
//
//   return acc;
// }, []);
// console.log(evens);
//
// var evenFilterd = data2.filter(function(item) {
//   return item % 2 === 0;
// });
// console.log(evenFilterd);
//
// var filterMapped = data2.filter(function(value) {
//   return value % 2 === 0;
// }).map(function(item) {
//   return item * 2;
// });
// console.log(filterMapped);

//2.3.3
var bigData = [];
for (var i = 0; i < 1000000; i++) {
  bigData[i] = i;
}

console.time('bigData');
var filterMappedBigData = bigData.filter(function(value) {
  return value % 2 === 0;
}).map(function(value) {
  return value * 2;
});
console.timeEnd('bigData');

console.time('bigDataReduce');
var reduceBigData = bigData.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value * 2);
  }
  return acc;
}, []);
console.timeEnd('bigDataReduce');
