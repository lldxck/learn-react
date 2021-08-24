import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        // this.setState({
        //     count:this.state.count+1
        // })
        // this.setState({
        //     count:this.state.count+1
        // })
        // this.setState({
        //     count:this.state.count+1
        // })
        // 相当于
        // Object.assign(this.state,{count:this.state.count+1},{count:this.state.count+1},{count:this.state.count+1})

        this.setState(state => {
            return {count:state.count+1}
        })
        this.setState(state => {
            return {count:state.count+1}
        })
        this.setState(state => {
            return {count:state.count+1}
        })
    }
    render() {
        return (
            <div>
                <div>当前计数：{this.state.count}</div>
                <button onClick={() => this.increment()}>+1</button>
            </div>
        )
    }
}
