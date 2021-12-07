import React, { PureComponent } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button } from "antd";
import "./transitionGroup.css";

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      names: ["lily", "Tom", "Jack"],
    };
  }
  addNames() {
    this.setState({
      names: [...this.state.names, "rose"],
    });
  }
  delName(index) {
    const newNames = [...this.state.names];
    newNames.splice(index, 1);
    this.setState({
      names: newNames,
    });
  }
  render() {
    const { names } = this.state;
    return (
      <div>
        <TransitionGroup>
          {names.map((item, index) => {
            return (
              <CSSTransition key={index} timeout={1000} classNames="item">
                <div>
                  {item}
                  <Button
                    type="text"
                    size="small"
                    onClick={(index) => this.delName(index)}
                  >
                    x
                  </Button>
                </div>
              </CSSTransition>
            );
          })}
          <Button type="primary" size="middle" onClick={() => this.addNames()}>
            添加
          </Button>
        </TransitionGroup>
      </div>
    );
  }
}
