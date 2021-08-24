import React, { PureComponent } from 'react';
import {EventEmitter} from 'events'

const eventBus = new EventEmitter()

class Home extends PureComponent{
  componentDidMount(){
    // 监听事件
    eventBus.addListener('sayHello',this.sayHello)
  }
  componentWillUnmount(){
    // 移除事件的监听
    eventBus.removeListener('sayHello',this.sayHello)
  }
  sayHello(text,num){
    console.log(text,num)
  }
  render(){
    return(
      <div>
        Home
      </div>
    )
  }
}
class Profile extends PureComponent{
  sayHello(){
    eventBus.emit('sayHello','hello Home',111)
  }
  render(){
    return(
      <div>
        Profile
        <button onClick={e => this.sayHello()}>say hello</button>
      </div>
    )
  }
}


export default class componentName extends PureComponent {
  render() {
    return (
      <div> 
        <Home />
        <Profile />
      </div>
    );
  }
}
