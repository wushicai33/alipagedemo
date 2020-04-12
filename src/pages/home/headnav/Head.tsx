import React from 'react';
import "./Head.scss";
import className from 'classnames'

interface Props {
  nav:{text:string,url:string|null}[]
}
class Head extends React.Component<Props>{
  render(){
    return (
        <div className="head-nav">

            <div className="nav-content">
                <img className="ali-log" src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt=""/>
                <i className='cut-off'/>

                <div className='nav-link'>
                    {this.props.nav.map((item,index)=>{
                       if(item.url) return <span className={className("nav-item",{active:index===1})} key={item.url}><a href={item.url}>{item.text}</a></span>
                       return <span className="nav-item" key={index}>{item.text}</span>
                    })}
                </div>

                <div className="welcome">
                    欢迎来到阿里巴巴，
                    <a href="">登录</a>
                    <i className='cut-off'></i>
                    <a href="">注册</a>
                </div>
                
            </div>

        </div>
    )
  }

}
export default Head;
