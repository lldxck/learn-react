import React, { PureComponent } from 'react'

// 定义一个高阶组件
function enhanceProps(WrappedComponent){
    return class newComponent extends PureComponent{
        render (){
            return(
                <WrappedComponent {...this.props} region="中国"/>
            )
        }
    }
}

class Home extends PureComponent{
    render(){
        return(
            <div>
            Home
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
            <div>{`姓名：${this.props.name} 年龄：${this.props.age} 区域：${this.props.region}`}</div>
            </div>
        )
    }
}

const EnhanceHome= enhanceProps(Home)
const EnhanceAbout = enhanceProps(About)


export default class App extends PureComponent {
    render() {
        return (
            <div>
                APP
                {/* 
                <Home name="张三"  age={18} />
                <About name="李四" age={12} />
                */}
                <EnhanceHome name="张三"  age={18} />
                <EnhanceAbout name="李四" age={12} />
            </div>
        )
    }
}
