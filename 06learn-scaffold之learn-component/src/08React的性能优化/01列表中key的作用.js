import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      movies:['大话西游','星际穿越']
    }
  }
  addMovies(){
    // React使用key来匹配原有Dom树上的子元素以及Dom树上最新的子元素，使Dom树的渲染效率得以提升
    // this.setState({
    //   movies:[...this.state.movies,'流浪地球']
    // })
    this.setState({
      movies:['钢铁侠',...this.state.movies]
    })
  }
  render() {
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {this.state.movies.map((item,index) => {
          return <li key={item}>{item}</li>
        })}
        </ul>
        <button onClick={e => this.addMovies()}>添加电影</button>      
      </div>
    );
  }
}
