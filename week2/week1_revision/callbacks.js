function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSquares(a, b) {
  let square1 = square(a);
  let square2 = square(b);
  return square1 + square2;
}

function sumOfCubes(a,b) {
  let cube1 = cube(1);
  let cube2 = cube(2);
  return  cube1 + cube2;
}

let ans = sumOfSquares(1, 2);
const ans2 = sumOfCubes(1,2);
console.log(ans2);
console.log(ans);
//here we are violating the DRY principle
// so a better approach would be to use callback functions:

function sumOfSomething(a,b,fn){
  let ans1 = fn(a);
  let ans2 = fn(b);
  return ans1 + ans2;
}
const call1 = sumOfSomething(2,4,cube);
console.log("using callback")
console.log(call1);

