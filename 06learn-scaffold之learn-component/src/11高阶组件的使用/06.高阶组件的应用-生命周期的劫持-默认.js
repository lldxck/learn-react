import React, { PureComponent } from 'react'

class Home extends PureComponent{
    UNSAFE_componentWillMount(){
        this.startTime=Date.now()
    }
    componentDidMount(){
        this.endTime=Date.now()
        const interval = this.endTime-this.startTime
        console.log(`Home组件渲染时间:${interval}`)
    }
    render(){
        return(
            <div>
                Home
            </div>
        )
    }
}

class About extends PureComponent{
    UNSAFE_componentWillMount(){
        this.startTime=Date.now()
    }
    componentDidMount(){
        this.endTime=Date.now()
        const interval = this.endTime-this.startTime
        console.log(`About组件渲染时间:${interval}`)
    }
    render(){
        return(
            <div>
                About
            </div>
        )
    }
}

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home />
                <About />
            </div>
        )
    }
}
