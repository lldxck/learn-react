import React, { PureComponent, StrictMode } from 'react'

// 严格模式检测是什么？
// 1.识别不安全的生命周期
// 2.过时的ref API
// 3.检查意外的副作用
// 4.关于使用废弃的 findDOMNode 方法的警告
// 5.检测过时的 context API

class Home extends PureComponent{
    constructor(props){
        super(props)
        console.log('Home constructor')
    }
    // componentWillMount(){
    //     console.log("Home componentWillMount")
    // }
    // UNSAFE_componentWillMount(){
    //     console.log('Home UNSAFE_componentWillMount')
    // }
    render(){
        // return <div ref="title">Home</div>
        return <div>Home</div>
    }
}

class Profile extends PureComponent{
    constructor(props){
        super(props)
        console.log('Profile constructor')
    }
    // componentWillMount(){
    //     console.log('Profile componentWillMount')
    // }
    // UNSAFE_componentWillMount(){
    //     console.log('Profile UNSAFE_componentWillMount')
    // }
    render(){
        // return <div ref="title">Profile</div>
        return <div>Profile</div>
    }
}

export default class App extends PureComponent {

    render() {
        return (
            <div>
                <StrictMode>
                    <Home />
                </StrictMode>
                <Profile />
            </div>
        )
    }
}
