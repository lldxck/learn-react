import React, { Component } from 'react'
import PropTypes from 'prop-types'

//  class组件
class Cpn extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
            <div>{this.props.name}</div>
            <div>{this.props.age}</div>
            <div>爱好列表</div>
            <ul>
                {this.props.hobby.map((item,index) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
            </div>
        )
    }
}

//  属性验证
Cpn.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    hobby:PropTypes.array
}
// 设置默认属性
Cpn.defaultProps={
    name:'haha',
    age:10,
    hobby:['玩']
}

// 函数组件
function Cpn2(props){
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>爱好列表</div>
            <ul>
                {props.hobby.map((item,index) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}


export default class App extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <div>
                <Cpn name="张三" age={18} hobby={['玩','运动','看电影']}/>
                <Cpn />
                {/*<Cpn name="张三" age='12' hobby={['玩','运动','看电影']}/>
               <Cpn name="张三" age='12' hobby={{name:"12"}}/>*/}
                <hr />
                <Cpn2 name="莉丝" age={10} hobby={['逛街','打游戏']} />
            </div>
        )
    }
}
