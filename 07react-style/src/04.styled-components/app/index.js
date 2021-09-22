import React, { PureComponent } from 'react'
import styled,{ThemeProvider} from 'styled-components'
import Home from '../home'
import Profile from '../profile'

const CommonBtn = styled.button`
    padding:10px 15px;
    border-color: red;
    color:#000;
`
// const PrimaryBtn = styled.button`
//     padding:10px 15px;
//     border-color: red;
//     color:#fff;
//     background-color: green;
// `

// 继承
const PrimaryBtn = styled(CommonBtn)`
color:#fff;
background-color: green;
`
// 主题

export default class App extends PureComponent {
    render() {
        return (
            <ThemeProvider theme={{themeColor:'yellow',fontSize:'16px'}}>
                <Home />
                <Profile />
                <hr />
                <CommonBtn>我是普通的按钮</CommonBtn>
                <PrimaryBtn>我是主要的按钮</PrimaryBtn>
            </ThemeProvider>
        )
    }
}
