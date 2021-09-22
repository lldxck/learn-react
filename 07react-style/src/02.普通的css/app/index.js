import React, { PureComponent } from 'react'
import Home from '../home'
import Profile from '../profile'
import './style.css'

export default class App extends PureComponent {
    render() {
        return (
            <div id="app">
                <div className="title">我是App的title</div>
                App
                <Home />
                <Profile />
            </div>
        )
    }
}
