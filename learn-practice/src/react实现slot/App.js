import React, { Component } from 'react'
import NavBar  from './NavBar'

export default class App extends Component {


    render() {
        return (
            <div>
            {/*方式一：通过props.children */}
            {/*
                <NavBar>
                    <div>返回</div>
                    <div>标题</div>
                    <div>搜索</div>
                </NavBar>
             */}
            {/*方式二：通过props数据传递 */}
                <NavBar navLeft={<dvi>返回1</dvi>} navCenter={<div>标题1</div>} navRight={<div>搜索1</div>}/>
            </div>
        )
    }
}
