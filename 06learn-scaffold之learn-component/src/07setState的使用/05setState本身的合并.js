import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }
  increment(){
    // setState本身被合并
    // setState()是异步的，在同一周期内会对多个setState进行批处理,即后调用的setState()将覆盖同一周期内先调用setState的值，所以商品数量仅增加一次
    // this.setState({
    //   count:this.state.count+1
    // })
    // this.setState({
    //   count:this.state.count+1
    // })
    // this.setState({
    //   count:this.state.count+1
    // })
    // 相当于下面
    // Object.assign(this.state,{count:this.state.count+1},{count:this.state.count+1})

    // count的值被累加，后一次更改数值依赖于前一次的结果
    this.setState((state,props) => {
      return{
        count:state.count+1
      }
    })
    this.setState((state,props) => {
      return{
        count:state.count+1
      }
    })
    this.setState((state,props) => {
      return{
        count:state.count+1
      }
    })
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.count}</h2>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    );
  }
}
