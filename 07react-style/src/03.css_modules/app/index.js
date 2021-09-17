import React, { PureComponent } from 'react'
import Home from '../home'
import Profile from '../profile'

import style from './style.module.css'

export default class App extends PureComponent {
    render() {
        return (
            <div>
                App
                <div className={style.title}>我是App的title</div>
                <Home />
                <Profile />
            </div>
        )
    }
}
