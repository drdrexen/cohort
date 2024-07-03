const jwt = require("jsonwebtoken")

//creating a new user
const newUser = {
    name: "Hari Joshi",
    email: "harijoshi69@gmail.com",
    accountNumber: 505040678932
}

//generating tokens
const token = jwt.sign(newUser, "secret123321")
console.log(token);
//here "secret123321" is used to generate the token, so the same thing will be required to verify it, no matter who decodes it...

const token2 = jwt.sign(newUser, "hello123")
console.log(token2);

const verifiedValue1 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFyaSBKb3NoaSIsImVtYWlsIjoiaGFyaWpvc2hpNjlAZ21haWwuY29tIiwiYWNjb3VudE51bWJlciI6NTA1MDQwNjc4OTMyLCJpYXQiOjE3MjAwMDkwNzB9.__k8Ps0fu7PY5P7e5A-b7NIWyDl4A_A2dWTdc_2_hTc", "secret123321");
console.log(verifiedValue1);

const verifiedValue2 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFyaSBKb3NoaSIsImVtYWlsIjoiaGFyaWpvc2hpNjlAZ21haWwuY29tIiwiYWNjb3VudE51bWJlciI6NTA1MDQwNjc4OTMyLCJpYXQiOjE3MjAwMDkwNzB9.wOz2Icsv5mmRP2QHtMtGVa2u4mShzPeTQvHgjggEEk4", "hello123");
console.log(verifiedValue2);
