import React, { Component } from 'react';

export default class TabControl extends Component {
  constructor(props){
    super(props)
    this.state={
      currentIndex:0,
    }
  }
  itemClick(index){
    this.setState({
      currentIndex:index
    })
    this.props.tabItemClick(index)
  }
  render() {
    const {titles} = this.props
    const {currentIndex} = this.state
    return (
      <div className="tab-control">
        {titles.map((item,index) => {
          return (<div key={index} className={'tab-item '+(index===currentIndex?'active':'')} onClick={() => this.itemClick(index)}>
            <span>{item}</span>
          </div>)
        })}
      </div>
    );
  }
}
