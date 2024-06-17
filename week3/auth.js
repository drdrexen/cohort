// authentication and input validation without using middlewares

const express = require("express");
const app = express();
app.get("/health-checkup", function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.userId;

    if (username != "admin" || password != "admin") {
        res.status(400).json({
            "msg": "Something is wrong with your input"
        })
        return
    }


    if (kidneyId = 1 || kidneyId != 2) {
        res.status(400).json({
            "msg": "there is something wrong with your inputs"
        })
        return
    }

    res.json({
        msg: "Your kidneys are healthy"
    })

});
app.listen(3000);
