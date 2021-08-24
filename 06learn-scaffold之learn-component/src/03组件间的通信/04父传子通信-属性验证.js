import React, { Component } from 'react';
import ProtoTypes from 'prop-types'

class Cpn extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    const {name,age,height,arr}=this.props
    return(
      <div>
        {/* <div>我是Cpn组件</div> */}
        <div>{name+' '+age+' '+height}</div>
        <ul>
          {arr.map((item,index) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div> 
    )
  }
}
Cpn.propTypes={
  name:ProtoTypes.string.isRequired,
  age:ProtoTypes.number,
  height:ProtoTypes.number,
  arr:ProtoTypes.array,
}
Cpn.defaultProps={
  name:'默认名称',
  age:10,
  height:1.3,
  arr:['qq','wx']
}

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <div>我是App组件</div> */}
        <Cpn name="张三" age={19} height={1.88} arr={['aaa','bbb']}/>
        <Cpn name="李四" age={17} height={1.70} arr={['ccc','ddd']}/>
        <Cpn />
      </div>
    );
  }
}
