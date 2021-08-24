import React, { Component } from 'react';

class Cpn extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  // constructor(){
  // // react会默认帮助保存（无论是否手动保存）
  //   super()
  //   this.state={}
  // }
  render(){
    const {name,age,height} = this.props
    return(
      <div>
        {name+' '+age+' '+height}
      </div>
    )
  }
}


export default class App extends Component {
  render() {
    return (
      <div>
        <Cpn name="哈哈哈" age="12" height="1.5"/>
        <Cpn name="嘿嘿嘿" age="14" height="1.6"/>
      </div>
    );
  }
}
