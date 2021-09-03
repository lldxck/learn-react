import React, { PureComponent } from 'react'

class LoginPage extends PureComponent{
    render(){
        return(
            <div>登录界面</div>
        )
    }
}

function withAuth(WrappedComponent){
    return class extends PureComponent{
        render(){
            if(this.props.isLogin){
                return <LoginPage/>
            }else{
                return <WrappedComponent {...this.props}/>
            }
        }
    }
}

class CartPage extends PureComponent{
    render(){
        return(
            <div>购物车页面</div>
        )
    }
}

const AuthCart = withAuth(CartPage)


export default class App extends PureComponent {
    render() {
        return (
            <div>
                <AuthCart isLogin={false}/>
            </div>
        )
    }
}
