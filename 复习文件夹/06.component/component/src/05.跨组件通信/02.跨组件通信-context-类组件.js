import React, { Component,createContext } from 'react'

const UserContext = createContext({
    name:"haha",
    age:12,
})

class Home extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
                <div>Home</div>
                <Detail />
            </div>
        )
    }
}

class Detail extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
                <div>Detail</div>
                <div>姓名：{this.context.name}</div>
                <div>年龄：{this.context.age}</div>
            </div>
        )
    }
}

Detail.contextType=UserContext


export default class App extends Component {

    render() {
        return (
            <div>
                <UserContext.Provider value={{name:'jack',age:15}}>
                    <Home />
                </UserContext.Provider>
            </div>
        )
    }
}
