import React, { PureComponent } from 'react'

import style from './style.module.css'
export default class Profile extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            color:'blue'
        }
    }
    render() {
        return (
            <div>
                <div className={style.title}>我是Profile的title</div>
                <div className={style.setting}>设置</div>
                <ul>
                    <li className={style.settingItem}>设置1</li>
                    <li style={{color:this.state.color}}>设置2</li>
                    <li>设置3</li>
                </ul>
            </div>
        )
    }
}
