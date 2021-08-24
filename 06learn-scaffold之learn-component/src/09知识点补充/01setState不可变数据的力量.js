import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      firends:[
        {
          name:'tom',
          age:22,
        },
        {
          name:'jack',
          age:19,
        },
        {
          name:'lily',
          age:10,
        },
      ]
    }
  }
  shouldComponentUpdate(nextProps,nextState){
    if(this.state.firends !== nextState.firends){
      return true
    }
    return false
  }
  insertFriend(){
    // 不推荐使用，此方法当使用PureComponent或者shouldDomponentUpdate()时不会刷新页面，和引用类型在内存中的存储有关。
    this.state.firends.push({name:'lucy',age:8})
    this.setState({
      firends:this.state.firends
    })
    // 推荐使用方法
    // const newFriends=[...this.state.firends]
    // newFriends.push({name:"啦啦",age:12})
    // this.setState({
    //   firends:newFriends
    // })

  }
  render() {
    return (
      <div>
        <h2>好友列表：</h2>
        <ul>
          {this.state.firends.map(item => {
            return <li key={item.name}>{item.name}</li>
          })}
        </ul>
        <button onClick={e => this.insertFriend()}>添加好友</button>
      </div>
    );
  }
}
