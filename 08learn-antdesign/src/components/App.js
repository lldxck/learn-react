import React, { PureComponent } from "react";
// import Home from "./home/homeCpn/homeRecommend";
import Home from 'components/home/homeCpn/homeRecommend'
export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <Home />
      </div>
    );
  }
}
