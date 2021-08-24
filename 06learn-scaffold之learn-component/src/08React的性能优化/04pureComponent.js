import React, { PureComponent } from 'react';


function Header(){
  console.log('Header被调用了')
  return (
    <div>Header</div>
  )
}

class Main extends PureComponent{
  render(){
    console.log('Main的render被调用了')
    return(
      <div>
        <Banner />
        <SettingList/>
      </div>
    )
  }
}

class Banner extends PureComponent{
  render(){
    console.log('banner的render被调用了')
    return(
      <div>Banner</div>
    )
  }
}

function SettingList(){
  console.log('setting被调用了')
  return(
    <div>
      <div>列表</div>
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
        <li>设置5</li>
      </ul>
    </div>
  )
}

function Footer(){
  console.log('footer被调用了')
  return(
    <div>
      Footer
    </div>
  )
}



export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      count:0,
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数:{this.state.count}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  increment(){
    this.setState({
      count:this.state.count+1
    })
  }
}
