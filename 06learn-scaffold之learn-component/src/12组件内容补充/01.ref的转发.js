import React, { createRef, forwardRef, PureComponent } from 'react'

const Profile = forwardRef(function Profile(props,ref){
    return <div ref={ref}>Profile</div>
}) 

class Home extends PureComponent{
    render(){
        return <div>Home</div>
    }
}

export default class App extends PureComponent {
    constructor(props){
        super(props)
        this.state={}
        this.titleRef = createRef()
        this.homeRef = createRef()
        this.profileRef=createRef()
    }
    getRef(){
        console.log(this.titleRef.current)
        console.log(this.homeRef.current)
        console.log(this.profileRef.current)
    }
    render() {
        return (
            <div>
                <div ref={this.titleRef}>title</div>
                <Home ref={this.homeRef}/>
                <Profile ref={this.profileRef}/>
                <button onClick={() => this.getRef()}>获取ref</button>
            </div>
        )
    }
}
