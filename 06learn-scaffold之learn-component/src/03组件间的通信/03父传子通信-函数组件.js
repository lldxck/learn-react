import React, { Component } from 'react';

class Cpn extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    const {name,age,height} = this.props
    return(
      <div>
        {name+' '+age+' '+height}
      </div>
    )
  }
}

function Fpn(props){
  const {name,age,height}=props
  return(
    <div>
      {name+' '+age+' '+height}
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Cpn name="哈哈哈" age="12" height="1.5"/>
        <Cpn name="嘿嘿嘿" age="14" height="1.6"/>
        <Fpn name="啦啦啦" age="18" height="1.7"/>
      </div>
    );
  }
}
