import React, { PureComponent } from "react";
import CSSTransition from "./transition/CSSTransition";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <CSSTransition />
      </div>
    );
  }
}
