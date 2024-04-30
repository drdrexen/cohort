const { log } = require("console");
const express = require("express")
const app = express();
const users = [{
    name: "Nischal",
    kidneys: [{
        healthy: false,
        number: 2
    }]
}];
app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys
    res.send(johnKidneys);
})
app.put("/", function (req, res) {
    // write logic
})
app.post("/", function (req, res) {
    // write logic
})
app.delete("/", function (req, res) {
    // write logic
})
app.listen(3000);