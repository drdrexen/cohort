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
//assignment
const ar1 = [1,2,3,4,5,6]
const ar2 = [2,3,4,5,6,7]
const transform2=(a,b)=> a+b;

const ar3 = ar1.map((element, index) => transform2(element, ar2[index]));
console.log(ar3);

//filterout all even numebers form the array
const num1= [1,2,4,6,8,7,6];
const num2 =[]
for(let i=0;i<num1.length; i++){
  if(num1[i]%2==0){
    num2.push(num1[i])
  }
}
console.log("the array with all even numbers is")
console.log(num2);

//solving it using filter function
function filterFunction(i) {
  if(i%2==0){
    return true
  }
  else
  return false;
}
hello1 = [1,2,3,4,5,6,7,8,9]
const hi = hello1.filter(filterFunction);
console.log("Using filter function")
console.log(hi)
