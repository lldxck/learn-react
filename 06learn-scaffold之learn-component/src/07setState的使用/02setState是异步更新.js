import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      message:'Hello World'
    }
  }
  // 方式二  获取异步更新的数据
  componentDidUpdate(){
    console.log(this.state.message)//你好
  }
  changeText(){
    // setState是异步更新
    // this.setState({
    //   message:'你好'
    // })
    // console.log(this.state.message)//Hello World

    // 方式一 获取异步更新后的数据
    this.setState({
      message:'你好'
    },() => {
      console.log(this.state.message)//你好
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    );
  }
}
