import React, { PureComponent } from 'react'

import styled from 'styled-components'

/**
 * 特点：
 * 1.props的穿透
 * 2.attrs的属性
 * 3.传入state作为props
 */

const InputWrapper = styled.input.attrs({
    placeholder:'请输入密码',
    bColor:'green'
})`
    background-color: pink;
    border-color:${props => props.bColor};
    color:${props => props.color};
`

export default class App extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            color:'red'
        }
    }
    render() {
        return (
            <div>
                <div>我是Profile的title</div>
                <div>设置</div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <input type="password"/>
                <InputWrapper type="password" color={this.state.color}/>
            </div>
        )
    }
}
