import React, { PureComponent } from 'react'

import './style.css'

export default class Home extends PureComponent {
    render() {
        return (
            <div className="home">
                <div className="title">我是Home的title</div>
                <div className="banner">
                    <span>轮播图</span>
                </div>
            </div>
        )
    }
}
