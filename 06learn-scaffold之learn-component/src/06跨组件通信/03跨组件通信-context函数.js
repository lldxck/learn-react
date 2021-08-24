import React, { Component } from 'react';

const UserContext = React.createContext({
  name:"啦啦",
  level:100,
})

function ProfileHeader(){
  return(
    
      <UserContext.Consumer>
        {
          value => {
            // console.log(value)
            return(
              <div>  
                <h2>名称:{value.name}</h2>
                <h2>等级:{value.level}</h2>
              </div>
            )
            
          }
        }
      </UserContext.Consumer>
    
  )
}

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
      name:'张三',
      level:10,
    }
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
        
      </div>
    );
  }
}
