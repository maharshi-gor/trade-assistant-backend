import express from "express";
const port = 8100;

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO FROM EXPRESS");
});

app.get("/hi", (req, res) => {
  res.send("HELLO FROM EXPRESS!!!!!!!!!!!");
});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
