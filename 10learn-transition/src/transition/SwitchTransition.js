import React, { PureComponent } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button } from "antd";
import "./switchTransition.css";

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };
  }
  render() {
    const { isOn } = this.state;
    return (
      <div>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={isOn ? "on" : "off"}
            timeout={500}
            classNames="switch"
          >
            <Button
              type="primary"
              size="small"
              onClick={(e) => this.setState({ isOn: !isOn })}
              className="btn"
            >
              {isOn ? "on" : "off"}
            </Button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}
