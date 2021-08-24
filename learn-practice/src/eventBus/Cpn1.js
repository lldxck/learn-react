import React, { Component } from 'react'
import {eventBus} from './utils'

export default class Cpn1 extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    sendMessage(){
        eventBus.emit('sendMessage','文字信息',2)
        eventBus.emit('sendMessage1',{name:'章三',age:10})
    }
    render() {
        return (
            <div>
                <div>Cpn1</div>
                <button onClick={() =>this.sendMessage()}>发送事件</button>
            </div>
        )
    }
}
