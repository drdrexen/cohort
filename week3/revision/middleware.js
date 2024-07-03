const express = require("express")
const app = express();
app.listen(3000);

// function that returns a boolean if the age is 14 years or not
function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    }
    else {
        res.status(400).json({
            msg: "You are not of age yet"
        });
    }
}
//introduce middlewares for all routes
app.use(isOldEnoughMiddleware);

app.get("/ride1", function (req, res) {
    res.json({
        msg: "You have successfully taken the ride 1"
    })
})
app.get("/ride2", function (req, res) {
    res.json({
        msg: "You have successfully taken the ride 2"
    })
})