import React, { Component } from 'react';

class Cpn1 extends Component{
  render(){
    return(
      <div>我是Cpn1组件</div>
    )
  }
}

function Cpn2(){
  return(
    <div>我是Cpn2组件</div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <div>我是App组件</div>
        <Cpn1 />
        <Cpn2 />
      </div>
    );
  }
}
