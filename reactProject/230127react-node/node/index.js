const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

// express에서 react build 폴더까지 static으로 경로 설정
app.use(express.static(path.join(__dirname, "../react/react-ex/build")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // 서버에서 5000포트로 접속하면 static 폴더의 index.html를 화면에 내보냄
  res.sendFile(path.join(__dirname, "../react/react-ex/build/index.html"));
});

// 어떤 url에서 새로고침 하더라도 화면에 뜰 수 있게 설정
app.get("*", () => {
  res.sendFile(path.join(__dirname, "../react/react-ex/build/index.html"));
});

app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://shk:<password>@cluster0.0rx9jgk.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log(`Server app listening on port ${port}`);
      console.log("Connecting MongoDB...");
    })
    .catch((err) => {
      console.log(err);
    });
});
