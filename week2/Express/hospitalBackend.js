const express = require("express");
const app = express();

const users = [
  {
    name: "Nischal",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const nischalKidney = users[0].kidneys;
  const numberOfKidneys = nischalKidney.length;
  let numberofHealthyKidney = 0;
  for (let i = 0; i < nischalKidney.length; i++) {
    if (nischalKidney[i].healthy) {
      numberofHealthyKidney += 1;
    }
  }

  const numberOfUnhealthyKidneys = numberOfKidneys - numberofHealthyKidney;
  res.json({
    numberOfKidneys,
    numberofHealthyKidney,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
    res.json({});
  }
});

app.delete("/", function (req, res) {
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push();
      healthy: true;
    }
  }
});
app.listen(3000);
