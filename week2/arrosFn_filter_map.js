//normal functions
function sum(a, b) {
  return a + b;
}
result = sum(1, 2);
console.log(result);
//array functions
const diff = (a, b) => a - b;
result = diff(6, 3);
console.log(result);

// map and filter
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
console.log(arr2);
// the map solution
const transform = (i) => i * 2;
const arr3 = arr1.map(transform);
console.log(arr3);
