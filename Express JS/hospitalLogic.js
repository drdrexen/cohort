const express = require("express")
const app = express();
const users = [{
    name: "John",
    kidneys: [{
        healthy: false,
        number: 2
    }]
}];
app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys
    const numberofKidneys = johnKidneys.length;
    let numberOfHealthykidneys = 0;
    for (i = 0; i < johnKidneys.length; i++){
        if (johnKidneys[i].healthy) {
            
        }
    }
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