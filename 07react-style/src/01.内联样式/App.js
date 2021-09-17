import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            color:'green',
        }
    }
    render() {
        const pStyle={
            fontSize:'14px',
            color:this.state.color,
            textDecoration:'line-through'
        }
        return (
            <div>
               <div style={{fontSize:'25px',color:'red'}}>我是title</div>
               <div style={pStyle}>我是内容</div>
            </div>
        )
    }
}
