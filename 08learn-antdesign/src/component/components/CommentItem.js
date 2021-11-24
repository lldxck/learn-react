import React, { PureComponent } from "react";
import { Comment, Tooltip, Avatar , Button} from "antd";
import moment from 'moment';

export default class CommentItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  delComment() {
    this.props.delComment();
  }
  render() {
    const { item, index } = this.props;
    return (
     <Comment
      actions={[<Button type="primary" onClick={() => this.delComment()}>删除</Button>]}
      author={<a>{item.name}</a>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt={item.name} />}
      content={
        <p>
          {item.content}
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment(item.commitDate).fromNow()}</span>
        </Tooltip>
      }
    />
    );
  }
}
