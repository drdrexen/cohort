function calculateSum(n) {
    let ans = 0;
    for (i = 0; i < n; i++) {
        ans = ans + i;
    }
    return ans;

}
const express = require("express");
const app = express();
app.get("/", function (req, res) {
    const num = req.query.n;
    const result = calculateSum(num);
    res.send("The sum is " + result);

})

app.listen(3000);