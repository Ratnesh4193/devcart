import express from "express";
const app = express();

app.get("/DLP", (req, res) => {
  console.log(req.query);
  res.send("API is running....");
});
const PORT = 4200;

app.listen(PORT, () => {});
