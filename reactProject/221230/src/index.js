import React from "react";
import ReactDOM from "react-dom/client";
// 컴포넌트 (대문자로 시작)
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
