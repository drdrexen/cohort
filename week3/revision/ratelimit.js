const express = require("express");
const { number } = require("zod");
const app = express();


let numberOfRequestForUser = {}
setInterval(() => {
    numberOfRequestForUser = {}
}, 1000);

app.use(function (req, res, next) {
    const userId = req.headers["user-id"]
    if (numberOfRequestForUser[userId]) {
        numberOfRequestForUser[userId] += 1;
        if (numberOfRequestForUser[userID] > 5) {
            res.status(400).send("mo more entry")
        }
        else {
            next();
        }
    } else {
        numberOfRequestForUser[userId] = 1;
        next();
    }

});

app.get('/user', function (req, res) {
    res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3000);