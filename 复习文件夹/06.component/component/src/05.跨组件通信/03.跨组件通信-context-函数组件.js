import React, { Component, createContext } from 'react'

const UserContext = createContext({
    name:'rose',
    age:10,
})

function Home(props){
    return(
        <div>
            <div>Home</div>
            <Detail />
        </div>
    )
}

function Detail(props){
    return(
        <div>
            <div>Detail</div>
            <UserContext.Consumer>
                {
                    value => {
                        return (
                            <div>
                            <div>姓名：{value.name}</div>
                            <div>姓名：{value.age}</div>
                            </div>                          
                        )
                    }
                }
            </UserContext.Consumer>
            
        </div>
    )
}



export default class App extends Component {
    render() {
        return (
            <div>
                <UserContext.Provider value={{name:"tom",age:9}}>
                    <Home />
                </UserContext.Provider>
                
            </div>
        )
    }
}
