//creating an http server using express

const express = require('express');
const app = express();
function sum(n) {
    ans = 0;
    for (i = 0; i <= n; i++) {
        ans += i;
    }
    return ans;
}

app.get("/", function (req, res) {
    const n = req.query.n;
    const result = sum(n)
    res.send("the sum is " + result);

})
app.listen(3000);