import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render() {
    // console.log(this.props.children)
    const {navLeft,navCenter,navRight} = this.props
    return (
      <div className="nav-bar">
        {/* children方式传值 */}
        {/* <div className="nav-left">
          {this.props.children[0]}
        </div>
        <div className="nav-center">
          {this.props.children[1]}
        </div>
        <div className="nav-right">
          {this.props.children[2]}
        </div> */}
        {/* props方式传值 */}
         <div className="nav-left">
          {navLeft}
        </div>
        <div className="nav-center">
          {navCenter}
        </div>
        <div className="nav-right">
          {navRight}
        </div>
      </div>
    );
  }
}
