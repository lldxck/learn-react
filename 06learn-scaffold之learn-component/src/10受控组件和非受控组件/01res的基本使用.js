import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>
          {/* ref的值：字符串/对象/函数 */}
          {/* 字符串 */}
          <h2 ref="titleRef">Hello World</h2>
          <button onClick={e => this.changeText()}>改变文本</button>
        </Text>
      </View>
    );
  }
  changeText(){
    // console.log(this.)

  }
}
