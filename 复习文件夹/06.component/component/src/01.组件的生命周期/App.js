import React, { Component } from 'react'

class Cpn extends Component{
    constructor(props){
        super(props)
        this.state={}

    }
    render(){
        return(
            <div>Cpn子组件</div>
        )
    }
    componentWillUnmount(){
        console.log('componentWillUnmount被调用了')
    }
}

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            text:"Hello React",
            isShow:true     
        }
        console.log('constructor被调用了')
    }
    componentDidMount(){
        console.log('componentDidMount被调用了')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate被调用了')
    }
    changeText(){
        this.setState({
            text:'Hello World'
        })
    }
    changeShow(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render() {
        console.log('render被调用了')
        return (
            <div>
                <h2>{this.state.text}</h2>
                <button onClick={() => this.changeText()}>改变文字</button>
                <hr />
                <button onClick={() => this.changeShow()}>{this.state.isShow?'隐藏':'显示'}</button>
                {this.state.isShow && <Cpn />}
            </div>
        )
    }
}
