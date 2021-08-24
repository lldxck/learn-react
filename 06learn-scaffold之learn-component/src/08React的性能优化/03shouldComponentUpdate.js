import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      count:0,
      message:'Hello World'
    }
  }
  increment(){
    this.setState({
      count:this.state.count+1
    })
  }

  // 当props或者state发生变化时，shouldComponentUpdate()会在渲染执行之前被调用（即render()执行之前被调用)，返回值默认为true。首次渲染或者forceUpdate()强制更新时不会调用该方法
  shouldComponentUpdate(nextProps,nextState){
    console.log(this.state)//{count: 0, message: "Hello World"}
    console.log(nextState)//{count: 0, message: "你好"}
    if(this.state.message !== nextState.message){
      // 更改message的值render不会被调用（不会被重新渲染）
      return false
    }
    return true
  }
  changeText(){
    this.setState({
      message:this.state.message==='你好'?'Hello World':'你好'
    })
  }
  render() {
    console.log('App中的render被调用')
    return (
      <div>
        <h2>当前计数:{this.state.count}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    );
  }
}
