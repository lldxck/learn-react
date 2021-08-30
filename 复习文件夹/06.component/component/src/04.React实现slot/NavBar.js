import React, { Component } from 'react'

export default class tabBar extends Component {
    render() {
        return (
            <div className="nav-bar">
            {/* 
                <div className="nav-left">{this.props.children[0]}</div>
                <div className="nav-center">{this.props.children[1]}</div>
                <div className="nav-right">{this.props.children[2]}</div>
            */}
            <div className="nav-left">{this.props.navLeft}</div>
            <div className="nav-center">{this.props.navCenter}</div>
            <div className="nav-right">{this.props.navRight}</div>
            </div>
        )
    }
}
