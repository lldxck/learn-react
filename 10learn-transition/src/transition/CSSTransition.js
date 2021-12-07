import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import { Card, Avatar, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./cssTransition.css";

const { Meta } = Card;

export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  changeShow = () => {
    console.log(this.state.isShow);
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    const { isShow } = this.state;
    return (
      <div>
        <Button type="primary" onClick={() => this.changeShow()}>
          显示/隐藏
        </Button>
        <CSSTransition
          in={isShow}
          timeout={600}
          classNames="card"
          appear={true}
          unmountOnExit={true}
          onEnter={(el) => console.log("开始进入")}
          onEntering={(el) => console.log("进入中...")}
          onEntered={(el) => console.log("进入完成")}
          onExit={(el) => console.log("开始退出")}
          onExiting={(el) => console.log("退出中")}
          onExited={(el) => console.log("退出完成")}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    );
  }
}