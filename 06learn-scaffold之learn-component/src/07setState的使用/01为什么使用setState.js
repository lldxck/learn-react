import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      message:'Hello World'
    }
  }
  changeText(){
    // this.state.message='你好'
    // // 直接更改state中的值页面未更新成修改之后的值（即render方法未重新调用）
    // console.log(this.state.message)

    this.setState({
      message:'你好'
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
