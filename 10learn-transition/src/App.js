import React, { PureComponent } from "react";
// import CSSTransition from "./transition/CSSTransition";
// import SwitchTransition from "./transition/SwitchTransition";
import TransitionGroup from "./transition/TransitionGroup";

export default class App extends PureComponent {
  render() {
    return (
      <div style={{ margin: "60px" }}>
        {/*<CSSTransition />
        <SwitchTransition />*/}
        <TransitionGroup />
      </div>
    );
  }
}
