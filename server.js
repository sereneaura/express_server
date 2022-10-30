const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({  slackUsername: "enyojo", backend: true, age: 26, bio: "active learner and adaptable" });
});
app.listen(5000, () => {
  console.log("listening on port 5000");
});
