import React, { Component } from 'react';

class Cpn extends Component{
 render(){
   return(
     <div>我是Cpn组件</div>
   )
 }
 componentWillUnmount(){
   console.log('组件的componentWillUnmount方法')
 }
}

export default class App extends Component {
  constructor(){
    super()

    this.state={
      count:0,
    }
    console.log('组件的constructor方法')
  }
  changeCount(){
    this.setState({
      count:this.state.count+1,
      isShowCpn:true
    })
  }
  showChange(){
    this.setState({
      isShowCpn:!this.state.isShowCpn
    })
  }
  render() {
    console.log('组件的render方法')
    return (
      <div> 
        <div>当前计数：{this.state.count}</div>
        <button onClick={() => this.changeCount()}>+1</button>
        <hr />
        <button onClick={() => this.showChange()}>显示/隐藏</button>
        {this.state.isShowCpn && <Cpn />}
      </div>
    );
  }
  componentDidMount(){
    console.log('组件的componentDidMount方法')
  }
  componentDidUpdate(){
    console.log('组件的componentDidUdate方法')
  }
}
