import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            userName:'',
            passWord:'',
            verifyCode:''
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
                    name="userName"
                    // onChange={(e) => this.handleUserNameChange(e)}
                    onChange={(e) => this.handleChange(e)}
                    />
                </label>
                <br />
                <label htmlFor="passWorld">
                    密码：<input 
                    type="text" 
                    id="passWorld" 
                    name="passWord"
                    // onChange={(e) => this.handlePassWordChange(e)}
                    onChange={(e) => this.handleChange(e)}
                    />
                </label>
                <br />
                <label htmlFor="verifyCode">
                    验证码：<input 
                    type="text" 
                    id="verifyCode" 
                    name="verifyCode"
                    // onChange={(e) => this.handleVerifyCodeChange(e)}
                    onChange={(e) => this.handleChange(e)}
                    />
                </label>
                <br />
                <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }
    handleSubmit(event){
        event.preventDefault()
        console.log(this.state.userName)
        console.log(this.state.passWord)
        console.log(this.state.verifyCode)
    }
    handleUserNameChange(event){
        this.setState({
            userName:event.target.value
        })
    }
    handlePassWordChange(event){
        this.setState({
            passWord:event.target.value
        })
    }
    handleVerifyCodeChange(event){
        this.setState({
            verifyCode:event.target.value
        })
    }
    handleChange(event){
        // 使用ES6的属性名
        this.setState({
            [event.target.name]:event.target.value
        })
    }
}
