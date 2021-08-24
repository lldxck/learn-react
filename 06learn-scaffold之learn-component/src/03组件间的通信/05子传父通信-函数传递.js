import React, { Component } from "react";

class CpnChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(this.props.increment)
  }
  render() {
    return (
      <div>
        <button onClick={this.props.increment}>子组件+1</button>
      </div>
    );
  }
}
class CpnChild2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button onClick={() => this.props.increment2("子组件增加1")}>
          子组件像父组件传递信息
        </button>
      </div>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  btnClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  btnClick2(msg) {
    console.log(msg);
  }
  render() {
    return (
      <div>
        <div>当前计数：{this.state.count}</div>
        <button onClick={() => this.btnClick()}>父组件+1</button>
        <hr />
        <CpnChild increment={() => this.btnClick()} />
        <CpnChild2 increment2={(text) => this.btnClick2(text)} />
      </div>
    );
  }
}
