import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            message:'hello react',
            count:0
        }
    }
    componentDidMount(){
        // 方式二：将setState放在原生Dom事件中
        document.getElementById('btn').addEventListener('click',() => {
            this.setState({
                message:'原生Dom事件修改信息'
            })
            console.log(this.state.message)//原生Dom事件修改信息
        })

    }
    changeText(){
        // 方式一：将setState放在定时器中
        setTimeout(() => {
            this.setState({
                message:"定时器内修改文字"
            })
            console.log(this.state.message)//定时器内修改文字
            console.log(Object.assign({},this.state,{count:2}))
        },0)

        // setState数据合并本质是通过Object.assign()方法实现的
        // console.log(Object.assign({},this.state,{message:'Object.assign()方法修改'}))
        // console.log(Object.assign({},this.state,{count:2}))
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={() =>this.changeText()}>修改信息</button>
                <button id="btn">原生Dom事件修改信息</button>
            </div>
        )
    }
}
