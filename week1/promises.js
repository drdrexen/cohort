// Creating a new Promise
let promise = new Promise((resolve, reject) => {
    let success = true; // Change to false to simulate failure

    if (success) {
        resolve("The operation was successful!");
    } else {
        reject("The operation failed!");
    }
});

// Using the Promise
promise
    .then((message) => {
        console.log(message); // Output: The operation was successful!
    })
    .catch((error) => {
        console.error(error); // Output: The operation failed! (if success is false)
    });