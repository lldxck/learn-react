import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      message:'Hello World',
      count:0,
    }
  }
  increment(){
    this.setState({
      count:this.state.count+1
    })

    // Object.assign()将所有可枚举属性的值从一个或多个源对象分配到目标对象。将返回目标对象
    // Object.assign(target, ...sources)  target目标对象   sources源对象
    console.log(Object.assign({},this.state,{count:this.state.count+1}))//{message: "Hello World", count: 1}
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>{this.state.count}</h2>
        <button onClick={e => {this.increment()}}>+1</button>
      </div>
    );
  }
}
