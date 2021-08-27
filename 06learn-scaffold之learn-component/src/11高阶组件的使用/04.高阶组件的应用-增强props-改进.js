import React, { createContext, PureComponent } from 'react'

const UserContext = createContext({
    name:'Jack',
    age:18,
    region:'中国'
})

// 定义一个高阶组件
function withUser(WrappedComponent){
    //  返回值是一个函数组件
    return props =>{
        // 函数的返回值
        return(
            <UserContext.Consumer>
            {
                value=>{
                    // Consumer的返回值
                    return <WrappedComponent {...props} {...value}/>
                }
            }
        </UserContext.Consumer>
        )
        
    }
}

class Home extends PureComponent{
    render(){
        return(
            <div>
                Home
                {/* 
                <UserContext.Consumer>
                    {
                        value=>{
                            return <div>{`姓名：${value.name} 年龄：${value.age} 区域：${value.region}`}</div>
                        }
                    }
                </UserContext.Consumer>
                */}
                <div>{`姓名：${this.props.name} 年龄：${this.props.age} 区域：${this.props.region}`}</div>
            </div>
        )
    }
}
class About extends PureComponent{
    render(){
        return(
            <div>
                About
                {/* 
                <UserContext.Consumer>
                    {
                        value=>{
                            return <div>{`姓名：${value.name} 年龄：${value.age} 区域：${value.region}`}</div>
                        }
                    }
                </UserContext.Consumer>
                */}
                <div>{`姓名：${this.props.name} 年龄：${this.props.age} 区域：${this.props.region}`}</div>
            </div>
        )
    }
}

const WithUserHome= withUser(Home)
const WithUserAbout =withUser(About)

export default class App extends PureComponent {
    render() {
        return (
            <div>
                App
                <UserContext.Provider value={{name:"rose",age:18,region:'中国'}}>
                    {/* 
                    <Home />
                    <About />
                    */}
                    <WithUserHome />
                    <WithUserAbout />
                </UserContext.Provider>             
            </div>
        )
    }
}
