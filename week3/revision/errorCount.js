
const express = require('express');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

app.use(function (err, req, res, next) {
    res.status(400).send({})
    errorCount += 1;
})

app.get('/user', function (req, res) {
    let a;
    console.log(a.length)
});

app.post('/user', function (req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function (req, res) {
    res.status(200).json({ errorCount });
});
app.listen(3000);