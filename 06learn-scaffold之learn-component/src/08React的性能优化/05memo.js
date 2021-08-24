import React, { PureComponent,memo } from 'react';

// memo仅检查props的变更，如果函数组件被memo包裹，且其中实现了useState,useReducer或useContext的Hook,当context发生变化时，仍会重新渲染。
const HeaderMemo=memo(function Header(){
  console.log('Header被调用了')
  return (
    <div>Header</div>
  )
})

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

const FooterMemo = memo(function Footer(){
  console.log('footer被调用了')
  return(
    <div>
      Footer
    </div>
  )
})



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
        {/* <Header /> */}
        <HeaderMemo />
        <Main />
        {/* <Footer /> */}
        <FooterMemo />
      </div>
    );
  }
  increment(){
    this.setState({
      count:this.state.count+1
    })
  }
}
