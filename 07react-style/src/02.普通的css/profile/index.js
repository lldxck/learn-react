import React, { PureComponent } from 'react'

import './style.css'
export default class Profile extends PureComponent {
    render() {
        return (
            <div className="profile">
                <div className="title">我是Profile的title</div>
                <div className="setting">设置</div>
                <ul>
                    <li>列表1</li>
                    <li>列表2</li>
                    <li>列表3</li>
                </ul>
            </div>
        )
    }
}
