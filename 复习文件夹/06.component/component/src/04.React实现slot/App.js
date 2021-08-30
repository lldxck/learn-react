import React, { Component } from 'react'
import NavBar from './NavBar'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 
                <NavBar>
                    <div>返回</div>
                    <div>title</div>
                    <div>搜索</div>
                </NavBar>
                */}
                <NavBar navLeft={<div>返回1</div>} navCenter={<div>title1</div>} navRight={<div>搜索1</div>} />
            </div>
        )
    }
}
