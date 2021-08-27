import React, { PureComponent } from 'react'

class App extends PureComponent {
    render() {
        return (
            <div>
                APP
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

// 定一个高阶组件----返回的是一个类组件
function enhanceComponent(WrappedComponent){
    const newComponent = class extends PureComponent{
        render(){
            return(
                <WrappedComponent {...this.props}/>
            )
        }
    }
    newComponent.displayName="react"
    return newComponent
}

// 定义高阶组件----返回的是一个函数组件
function enhanceComponent2(WrappedComponent){
    const newComponent2 = function (props){
        return <WrappedComponent {...props}/>
    }
    newComponent2.displayName="javaScript"
    return newComponent2
}

// const newApp = enhanceComponent(App)
const newApp = enhanceComponent2(App)

export default newApp;
