import React, { PureComponent,createRef } from 'react'

export default class App extends PureComponent {
    constructor(props){
        super(props)
        this.userNameRef=createRef()
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="userName">
                         用户名：<input type="text" id="userName" ref={this.userNameRef}/>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }
    handleSubmit(event){
        event.preventDefault()
        console.log(this.userNameRef.current.value)
    }
}
