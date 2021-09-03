import React, { PureComponent } from 'react'

function withRenderTime(WrappedComponent){
    return class extends PureComponent{
        UNSAFE_componentWillMount(){
            this.startTime=Date.now()
        }
        componentDidMount(){
            this.endTime=Date.now()
            const interval=this.endTime-this.startTime
            console.log(`${WrappedComponent.name}组件的渲染时间:${interval}`)
        }
        render(){
            return <WrappedComponent />
        }
    }
}


class Home extends PureComponent{
    // UNSAFE_componentWillMount(){
    //     this.startTime=Date.now()
    // }
    // componentDidMount(){
    //     this.endTime=Date.now()
    //     const interval=this.endTime-this.startTime
    //     console.log(`Home组件的渲染时间:${interval}`)
    // }
    render(){
        return(
            <div>
                Home
            </div>
        )
    }
}
class About extends PureComponent{
    // UNSAFE_componentWillMount(){
    //     this.startTime=Date.now()
    // }
    // componentDidMount(){
    //     this.endTime=Date.now()
    //     const interval=this.endTime-this.startTime
    //     console.log(`About组件的渲染时间:${interval}`)
    // }
    render(){
        return(
            <div>
                About
            </div>
        )
    }
}

const HomeRenderTime=withRenderTime(Home)
const AboutRenderTime=withRenderTime(About)


export default class App extends PureComponent {
    render() {
        return (
            <div>
                <HomeRenderTime />
                <AboutRenderTime />
            </div>
        )
    }
}
