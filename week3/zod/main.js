const express = require("express");
const zod = require("zod");
const app = express();
const mySchema = zod.array(zod.number());
app.use(express.json());
app.post("/health-checkup", function(req, res) {
  const kidneys = req.body.kidneys;
  const response = mySchema.safeParse(kidneys);

  if (!response.success) {
    res.status(411).json({
      msg: "Input is invalid"
    })
  } else {
    res.send({ response })
  }

});
app.listen(3000);

