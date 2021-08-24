import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            message:'hello react'
        }
    }
    componentDidUpdate(prevProps,prevStates){
        // 此方法中拿到的state数据也是修改之后的数据
        console.log(this.state.message) //修改后数据
    }
    changeText(){
        // this.setState({
        //     message:'你好'
        // })
        // 此时拿到的数据是修改前的数据
        // console.log(this.state.message) //Hello react

        //  setState的第二个参数传入一个函数，在函数内部能拿到改变之后的数据
        this.setState({
            message:'修改后数据'
        },()=>{
            console.log(this.state.message) //修改后数据
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.changeText()}>改变信息</button>
            </div>
        )
    }
}
