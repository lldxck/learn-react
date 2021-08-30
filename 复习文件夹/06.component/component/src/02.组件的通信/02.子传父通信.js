import React, { Component } from 'react'

class Cpn extends Component{
    render(){
        return(
            <div>
            <button onClick={() => this.props.increment()}>cpn+1</button>
            <hr />
            <button onClick={() => this.props.getMessage('子组件向父组件传递数据')}>向父组件中传递信息</button>
            </div>
        )
    }
}

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    getMessage(msg){
        console.log(msg)
    }
    render() {
        return (
            <div>
                <h2>当前计数：{this.state.count}</h2>
                <button onClick={() => this.increment()}>app+1</button>
                <hr />
                <Cpn increment={() => this.increment()} getMessage={(msg) => this.getMessage(msg)}/>
            </div>
        )
    }
}
