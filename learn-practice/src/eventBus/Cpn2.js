import React, { Component } from 'react'
import {eventBus} from './utils'

export default class Cpn2 extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            message:'hello react'
        }
    }
    componentDidMount(){
        console.log(1)
        eventBus.addListener('sendMessage',this.received.bind(this))
        eventBus.addListener('sendMessage1',this.received1.bind(this))
    }
    received(text,num){
        console.log('收到信息',text,num)
        this.setState({
            count:num,
            message:text
        })
    }
    received1(useInfo){
        console.log('收到信息',useInfo)
        
    }
    componentWillMount(){
        eventBus.removeListener('sendMessage',this.received.bind(this))
    }
    render() {
        return (
            <div>
                <div>Cpn2</div>
                <div>数值：{this.state.count}</div>
                <div>{this.state.message}</div>
            </div>
        )
    }
}
