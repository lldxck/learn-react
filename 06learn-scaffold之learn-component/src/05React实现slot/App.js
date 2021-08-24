import React, { Component } from 'react';
import NavBar from './NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar>
          <span>aaa</span>
          <span>bbb</span>
          <span>ccc</span>
        </NavBar> */}
        <NavBar navLeft={<span>aaa</span>} navCenter={<span>bbb</span>} navRight={<span>ccc</span>}/>
        <NavBar navLeft={<span>aaa</span>} navRight={<span>ccc</span>}/>
         
      </div>
    );
  }
}
