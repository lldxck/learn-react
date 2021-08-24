import React, { Component } from 'react';

const UserContext = React.createContext({
  name:'李四',
  level:80,
})

const ColorContext = React.createContext({
  color:'red'
})


function ProfileHeader(){
  return(
    <UserContext.Consumer>
       {
        value => {
          return(
            <ColorContext.Consumer>
              {
                style => {
                  return(
                     <div>
                      <h2>名称:{value.name}</h2>
                      <h2 style={{color:style.color}}>等级:{value.level}</h2>
                    </div>
                  )
                }
              }
            </ColorContext.Consumer>         
          )
        }
      }
    </UserContext.Consumer>  
  )
}

function Profile(){
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  )
}


export default class App extends Component {
  constructor(){
    super()
    this.state={
      name:'王武',
      level:100,
    }
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ColorContext.Provider value={{color:'pink'}}>
            <Profile />
          </ColorContext.Provider>
        </UserContext.Provider>
        
      </div>
    );
  }
}
