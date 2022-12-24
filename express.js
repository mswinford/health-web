const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "dist/index.html"));
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
