import React, { Component } from 'react';

function ProfileHeader(props){
  return(
    <div>
      <h2>姓名:{props.name}</h2>
      <h2>等级:{props.level}</h2>
    </div>
  )
}

function Profile(props){
  return(
    <div>
      {/* <ProfileHeader name={props.name} level={props.level}/> */}
      <ProfileHeader {...props}/>
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
  constructor(props){
    super(props)
    this.state={
      name:'哈哈哈',
      level:99,
    }
  }
  render() {
    return (
      <div>
        {/* <Profile name={this.state.name} level={this.state.level}/> */}
        <Profile {...this.state}/>
      </div>
    );
  }
}
