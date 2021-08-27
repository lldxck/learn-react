import React, { PureComponent,createContext } from 'react'

const UserContext = createContext({
    name:'默认名称',
    age:10,
    region:'中国'
})

class Home extends PureComponent{
    render(){
        return(
            <div>
                Home
                {/*
                <div>{`姓名：${this.context.name} 年龄：${this.context.age} 区域：${this.context.region}`}</div>
            */}
            <UserContext.Consumer>
                {
                    value =>{
                        return <div>{`姓名：${value.name} 年龄：${value.age} 区域：${value.region}`}</div>
                    }
                }
            </UserContext.Consumer>
            </div>
        )
    }
}
// Home.contextType=UserContext

class About extends PureComponent{
    render(){
        return(
            <div>
                About
                {/*
                <div>{`姓名：${this.context.name} 年龄：${this.context.age} 区域：${this.context.region}`}</div>
            */}
            <UserContext.Consumer>
            {
                value =>{
                    return <div>{`姓名：${value.name} 年龄：${value.age} 区域：${value.region}`}</div>
                }
            }
            </UserContext.Consumer>
            </div>
        )
    }
}
// About.contextType=UserContext

export default class APP extends PureComponent {
    render() {
        return (
            <div>
                App
                <UserContext.Provider value={{name:'王武',age:13,region:'中国'}}>
                    <Home />
                    <About />
                </UserContext.Provider>
                
            </div>
        )
    }
}
