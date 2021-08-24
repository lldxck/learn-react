import React, { Component } from 'react';
// 创建一个context对象,并设置默认值
const UserContext = React.createContext({
  name:'哈哈哈',
  level:88,
})
class ProfileHeader extends Component{
  render(){
    console.log(this.context)
    return(
      <div>
        <h2>名称：{this.context.name}</h2>
        <h2>等级：{this.context.level}</h2>
      </div>
    )
  }
}
ProfileHeader.contextType=UserContext

function Profile(){
  return(
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
        <li>设置5</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor(){
    super()
    this.state={
      name:'嘿嘿',
      level:99,
    }
  }
  render() {
    return (
      <div> 
        {/* 使用Provider来将当前的value值传递给以下的组件树，无论多深，任何组件都能读取到value这个值 */}
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
        
      </div>
    );
  }
}
