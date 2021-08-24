import React, { Component } from 'react';

class Header extends Component{
  render(){
    console.log('header的render被调用')
    return(
      <div>Header</div>
    )
  }
}
function Banner(){
  console.log('banner的render被调用')
  return(
    <div>Banner</div>
  )
}
class MoviesList extends Component{
  constructor(props){
    super(props)
    this.state={
      movies:['大话西游','钢铁侠','雷神']
    }
  }
  render(){
    console.log('moviesList的render被调用')
    return(
      <div>
        <div>电影列表</div>
        <ul>
          {this.state.movies.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}
class Main extends Component{
  render(){
    console.log('main的render被调用')
    return(
      <div>
        <Banner />
        <MoviesList />
      </div>
    )
  }
}

class Footer extends Component{
  render(){
    console.log('footer的render被调用')
    return(
      <div>Footer</div>
    )
  }
}


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }
  increment(){
    this.setState({
      count:this.state.count+1
    })
  }
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <div>当前计数：{this.state.count}</div>
        <button onClick={e => this.increment()}>+1</button>

      </div>
    );
  }
}

// render的调用顺序
// header的render被调用
// main的render被调用
// banner的render被调用
// moviesList的render被调用
// footer的render被调用
