import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

class Modal extends PureComponent{
    render(){
        return createPortal(this.props.children,document.getElementById('modal'))
    }
}

class Home extends PureComponent{
    render(){
        return(
            <div>
                <div>Home</div>
                <Modal><div>title</div></Modal>
            </div>
        )
    }
}

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <div>App</div>
                <Home/>
            </div>
        )
    }
}
