import React, { PureComponent } from "react";
import axios from "axios";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    //1.axios发送一个网络请求
    axios({
      url: "https://httpbin.org/get",
      methd: "get",
      params: {
        name: "lilei",
        nage: 19,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    axios({
      url: "https://httpbin.org/post",
      method: "post",
      data: {
        name: "hanhmeimei",
        age: 18,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    //2.axios发送get和post请求
    axios
      .get("https://httpbin.org/get", {
        params: {
          name: "lucy",
          age: 12,
        },
      })
      .then(console.log)
      .catch(console.error);

    axios
      .post("https://httpbin.org/post", {
        name: "haha",
        age: 20,
      })
      .then(console.log)
      .catch(console.error);

    //async await
    try {
      const result = await axios.get("https://httpbin.org/get", {
        params: {
          name: "ceshi",
          age: 10,
        },
      });
      console.log("async await拿到的结果", result);
    } catch (err) {
      console.log("err错误信息", err);
    }
  }
  render() {
    return <div>App</div>;
  }
}
