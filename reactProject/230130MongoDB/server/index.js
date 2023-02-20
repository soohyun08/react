const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 5000;

app.use(express.static(path.join(__dirname, "../client/build")));

// 서버에서 5000포트로 접속시 static폴더로 저장되거 있는 build 폴더 안의 index.html을 화면으로 보냄
app.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "../client/ build.index.html"));
});

// 어떤 url로 접속해도 화면이 뜸
app.get("*", (req, res) => {
  res.sendFile(path.join(dirname, "../client/ build.index.html"));
});

app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://shk:a12345@cluster0.0rx9jgk.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(console.log(`Example app listening on port ${port}`))
    .catch((err) => console.log(err));
});
