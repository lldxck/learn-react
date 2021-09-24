import React, { PureComponent } from 'react'
import classNames from 'classnames'

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      isActive:true,
      isBar:false,
      test1:undefined,
      test2:null,
      test3:0,
      test4:10,
    }
  }
  render() {
    const {isActive,isBar,test1,test2,test3,test4} = this.state
    return (
      <div>
        {/*原生的react设置class样式 */}
        <div className="foo bar baz">我是title1</div>
        <div className={'foo ' + (isActive?'active':'')}>我是title2</div>
        <div className={['foo','baz',(isActive?'active':'')].join(' ')}>我是title3</div>

        {/*classnames方式 */}
        <div className={classNames('foo','bar','baz')}>我是title4</div>
        <div className={classNames({'active':isActive,'bar':isBar},'foo')}>我是title5</div>
        <div className={classNames(['foo','bar',{'active':isActive}])}>我是title6</div>
        <div className={classNames({'active':isActive})}>我是title7</div>
        <div className={classNames({'test1':test1,'test2':test2,'test3':test3,'test4':test4})}>我是title8</div>
        <div>我是title9</div>
      </div>
    )
  }
}
