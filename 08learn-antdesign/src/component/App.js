import React, { PureComponent } from "react";
import CommentInput from "./components/CommentInput";
import CommentItem from "./components/CommentItem";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }
  commitComponent(item) {
    console.log("添加数据", item);
    this.setState(
      {
        commentList: [...this.state.commentList, item],
      },
      () => {
        console.log(this.state.commentList);
      }
    );
  }
  delComment(index) {
    const newList = [...this.state.commentList]
    newList.splice(index,1)
    this.setState({
      commentList: newList,
    });
  }
  render() {
    const { commentList } = this.state;
    return (
      <div>
        {commentList.map((item, index) => {
          return (
            <CommentItem
              key={index}
              item={item}
              delComment={() => this.delComment(index)}
              index={index}
            />
          );
        })}

        <CommentInput commitComponent={(item) => this.commitComponent(item)} />
      </div>
    );
  }
}
