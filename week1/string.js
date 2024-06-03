let a = "hello samir"
// console.log(a.length);
function findIndexOf(string, target) {
    console.log("Original string: ", string);
    // console.log("Index: ", string.indexOf(target));
    console.log("Index: ", string.lastIndexOf(target));
}
findIndexOf("samsung apple apple", "apple")
// -1 denotes that the target is not in the string

let text = "Hello world!";
console.log(text.slice(0, 7));

const value = "physics practical yet to be done"
console.log(value.replace("yet to be", "already"))
console.log(value.split(" "));

const username = "     Nischal     "
console.log(username.trim().toLowerCase().toUpperCase());

console.log(parseInt("37.333pxjagainlagnilsadfjakls"));    //string to int
console.log(parseInt("aaaaaa37.333pxjagainlagnilsadfjakls"));
//this doesn't work because there should be int in the zeroth index
