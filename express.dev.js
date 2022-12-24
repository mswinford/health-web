const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "dist")));

app.use(
  "/health-api",
  createProxyMiddleware({
    target: "http://localhost:8000",
    changeOrigin: true,
    pathRewrite: { "/health-api": "" },
  })
);

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "dist/index.html"));
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
