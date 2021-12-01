import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

// axios的默认配置
axios.defaults.baseURL = "https://httpbin.org";
axios.defaults.timeout = 5000;
axios.defaults.headers.common["token"] = "123456789";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
