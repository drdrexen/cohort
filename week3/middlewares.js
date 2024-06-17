const express = require("express");
const app = express();
app.listen(3000);

let numberOfRequests=0;
function calculateRequests(req,res,next){
  numberOfRequests++;
  console.log(numberOfRequests);
  next
}

app.use(calculateRequests);

app.post("/health-checkup", function(req,res){
  res.json({
    msg: "Hi there!"
  })
});

app.get("/health-checup2", function(req,res){
res.json({
msg: "Hi there  2"
})
});
