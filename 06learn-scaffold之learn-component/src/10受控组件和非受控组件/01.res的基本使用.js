import React, { PureComponent,createRef } from 'react';


class Counter extends PureComponent{
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }
  increment(){
    this.setState({
      count:this.state.count+1
    })
  }
  render(){
    return(
      <div>
        <h2>当前计数：{this.state.count}</h2>
        <button onClick={() => this.increment()}>+1</button>
      </div>
    )
  }
}


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.titleElRef = createRef()
    this.counterRef=createRef()
    this.titleElFunRef = null
  }

  render() {
    return (
      <div>
        <div>
          {/* ref的值：字符串/对象/函数 */}
          {/* 字符串 */}
          <h2 ref="titleRef">Hello World</h2>
          {/* 对象 */}
          <h2 ref={this.titleElRef}>Hello World</h2>
          {/* 函数 */}
          <h2 ref={(el) => this.titleElFunRef = el}>Hello World</h2>
          <button onClick={e => this.changeText()}>改变文本</button>
          <hr />
          {/*获取组件的ref */}
          <Counter ref={this.counterRef}/>
          <button onClick={() => this.appIncrement()}>app+1</button>
        </div>
      </div>
    );
  }
  changeText(){
    // 方式一:字符串
    console.log(this.refs.titleRef)
    this.refs.titleRef.innerHTML='Hello React'
    // 方式二:对象
    console.log(this.titleElRef.current)
    this.titleElRef.current.innerHTML='Hello JavaScript'
    // 方式三：函数
    console.log(this.titleElFunRef)
    this.titleElFunRef.innerHTML="Hello Vue"


  }
  appIncrement(){
    console.log(this.counterRef.current)
    this.counterRef.current.increment()
  }
}
