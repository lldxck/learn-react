import React, { Component } from 'react'

function Home(props){
    return(
        <div>
            <div>Home</div>
            <Detail />
        </div>
    )
}

function Detail(props){
    return(
        <div>
            <div>Detail</div>
        </div>
    )
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Home />
            </div>
        )
    }
}
