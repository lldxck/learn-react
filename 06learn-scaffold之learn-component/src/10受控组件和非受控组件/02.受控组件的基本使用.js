import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            userName:''
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="userName">
                        用户名：<input 
                                    type="text" 
                                    id="userName" 
                                    onChange={(e) => this.handleChange(e)}
                                    value={this.state.userName}/>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }
    handleSubmit(event){
        // 阻止默认的提交事件
        event.preventDefault()
        console.log(this.state.userName)
    }
    handleChange(event){
        console.log(event.target.value)
        this.setState({
            userName:event.target.value
        })
    }
}
