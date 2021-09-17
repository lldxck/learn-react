import React, { PureComponent } from 'react'

import style from './style.module.css'
export default class Home extends PureComponent {
    render() {
        return (
            <div>
                <div className={style.title}>我是Home的title</div>
                <div className={style.banner}>轮播图</div>
            </div>
        )
    }
}
