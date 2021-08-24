import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      message:'Hello World'
    }
  }

  componentDidMount(){
    // 同步的情况二：将setState放在原生dom事件中
    document.getElementById('btn').addEventListener('click',() => {
      this.setState({
        message:"你好呀"
      })     
      console.log(this.state.message)
    })
    
  }
  changeText(){
    // 同步的情况一：将setState放在定时器中
    setTimeout(() => {
      this.setState({
        message:"你好"
      })
      console.log(this.state.message)
    },0)
    
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => {this.changeText()}}>改变文本</button>
        <hr />
        <button id="btn">改变文本</button>
      </div>
    );
  }
}
