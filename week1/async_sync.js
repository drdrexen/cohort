function findSum(num) {
    sum = 0
    for (i = 0, i < num; i++;) {
        const ans = sum += num
        console.log("The sum is " + ans);
    }
}
function findSumTill100() {
    return findSum(100)
}
//callback function
setTimeout(findSumTill100, 10000000)     //the thread doesn't stop  because setTimeout is a async function
console.log("Hello world");