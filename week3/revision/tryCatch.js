try {
    let a;
    console.log(a.length);
    console.log("hello try"); //this thing doesn't print because the above syntax throws error
} catch (error) {
    console.log("hello world")
}
console.log("printed after the catch even there is error in try ");