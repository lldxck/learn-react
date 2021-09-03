import React, { Component } from 'react'

class Home extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
            Home
            {/*<Detail name={this.props.name} age={this.props.age}/>*/}
            <Detail {...this.props}/>
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
            Detail
            <div>姓名：{this.props.name}</div>
            <div>年龄：{this.props.age}</div>
            </div>
        )
    }
}


export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'莉丝',
            age:18,
        }
    }
    render() {
        return (
            <div>
                {/*<Home name="张三" age={12}/>*/}
                <Home {...this.state}/>
            </div>
        )
    }
}
