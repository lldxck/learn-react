import React, { PureComponent } from 'react'

import styled from 'styled-components'

const DivWrapper = styled.div`
    font-size:50px;
    color:red;

    span{
        color:#fff;
        background-color: pink;

        &.active{
            color:red;
        }

        &:hover{
            color:green;
        }

        &::after{
            content: 'aaa';
        }

    }
    /* .active{
        color:red
    } */
    
`
const H2Wrapper = styled.h2`
    /* color:blue; */
    text-decoration:underline;
    color:${props => props.theme.themeColor};
    font-size:${props => props.theme.fontSize};
`

export default class App extends PureComponent {
    render() {
        return (
            <DivWrapper>
                <div >我是Home的title</div>
                <H2Wrapper>我是Home的副标题</H2Wrapper>
                <div>
                    <span>轮播图1</span>
                    <span className="active">轮播图2</span>
                    <span>轮播图3</span>
                    <span>轮播图4</span>
                </div>
            </DivWrapper>
        )
    }
}
