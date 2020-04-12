import React from 'react';
import Head from './headnav/Head';
import Newjob from './newjob/Newjon';
import './Home.scss';
import {connect} from 'react-redux';
import {InitialState,actions} from "./HomeRedux"
import 'antd/dist/antd.css';
import { Input } from 'antd';
const { Search } = Input;


const mapStateToProps=(state?:any,ownProp?:any):any=>{
  return {
    ...state
  }
}

const mapDispatchToProps={...actions}
interface State {
  hotText:string[]
}

class Home extends React.Component<InitialState&typeof actions,State>{
  state={
    hotText:["JAVA","IOS","数据","安全","搜索","算法","运营","视觉","交互","前端"]
  }
 
  render(){
    const {jobList,spliceLoop} = this.props
    return (
      <div className="home-page">
        <Head nav={this.props.navArr}></Head>
        <div className="bg-box">
          <div className="bg-dim">
            <div className="search-container">
              <div className="search">
                <p >If not now, when?</p>
                <p>If not me, who?</p>
                <p className="cn">此时此刻，非我莫属！</p>

                <div className="search-box">
                  <Search
                    className="job-search"
                    placeholder="请输入职位关键词"
                    enterButton="搜索"
                    size="large"
                    onSearch={(value:string) => console.log(value)}
                  /> 
                 
                </div>
                <div className="hot-search">
                    <span>热门搜索：</span>
                    {this.state.hotText.map((item,index)=><span key={item} className="item">{item}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Newjob jobList={jobList}></Newjob>
        <div className='footer'>
		        阿里巴巴集团 Copyright ©1999-2020 版权所有
        </div>
     </div>
    ) 
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
