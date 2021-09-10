import React, { Fragment, PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            count:0,
            list:[
                {name:'张三',age:10},
                {name:'李四',age:11},
                {name:'王五',age:12},
            ]
        }
    }
    increment(){
        this.setState({
            count:this.state.count+1,
           
        })
    }
    render() {
        return (
            // <Fragment>
            //     <div>当前计数：{this.state.count}</div>
            //     <button onClick={() => this.increment()}>+1</button>
            // </Fragment>
            // 短语法 ----当标签内有属性时不能使用短语法（不能省略Fragment）
            <>
                <div>当前计数：{this.state.count}</div>
                <button onClick={() => this.increment()}>+1</button>
                <div>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <Fragment key={item.name}>
                                    <div>{item.name}</div>
                                    <div>{item.age}</div>
                                    <hr />
                                </Fragment>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
