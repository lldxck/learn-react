import React, { Component } from 'react'
import TabControl from './TabControl'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            tabs:['流行','精选','特惠'],
            currentTab:'流行'
        }
    }
    tabItemClick(index){
        this.setState({
            currentTab:this.state.tabs[index]
        })
    }
    render() {
        const {tabs,currentTab} = this.state
        return (
            <div>
                <TabControl tabs={tabs} tabItemClick={(index) => this.tabItemClick(index)}/>
                <div>{currentTab}</div>
            </div>
        )
    }
}
