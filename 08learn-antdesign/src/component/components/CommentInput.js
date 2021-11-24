import React, { PureComponent } from "react";
import { Input, Button } from "antd";
import moment from "moment";
const { TextArea } = Input;
export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      commentVal: "",
    };
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      commentVal: event.target.value,
    });
  }
  commitComponent() {
    console.log("发布");
    const params = {};
    params.name="haha"
    params.content=this.state.commentVal
    params.commitDate=moment().format('YYYY-MM-DD HH:mm:ss')
    this.props.commitComponent(params);
    this.setState({
      commentVal: "",
    });
  }
  render() {
    return (
      <div style={{ width: "80%" }}>
        <TextArea
          rows={4}
          value={this.state.commentVal}
          onChange={(e) => this.handleChange(e)}
        />
        <Button
          type="primary"
          size="large"
          style={{ marginTop: 10 }}
          onClick={() => this.commitComponent()}
        >
          发布评论
        </Button>
      </div>
    );
  }
}
