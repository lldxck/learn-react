import React, { Component } from 'react';

import TabControl from './TabControl';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      titles:['流行','精选','优品'],
      currentText:'流行',
    }
  }
  tabItemClick(index){
    this.setState({
      currentText:this.state.titles[index]
    })
  }
  render() {
    const {currentText} =this.state
    return (
      <div>
        <TabControl titles={this.state.titles} tabItemClick={(index) => this.tabItemClick(index)}/>
        <h2>{currentText}</h2>
      </div>
    );
  }
}
