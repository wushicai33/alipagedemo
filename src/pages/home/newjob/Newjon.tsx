import React from 'react';
import {InitialState} from '../HomeRedux'
import './Newjon.scss'

interface Props {
  jobList:InitialState["jobList"]
}

interface State {
  top:number;
  jobList:InitialState["jobList"]
}

class Newjob extends React.Component<Props,State>{
  state={
    top:0,
    jobList:[] as InitialState["jobList"]
  }

  timer:any=null
  setTime=()=>setInterval(()=>{
    this.setState({top:this.state.top-1},()=>{
      if(this.state.top<-500){
        const newJobList=this.state.jobList;
        const splitarr=newJobList.splice(0,10)
        this.setState({jobList:newJobList.concat(splitarr),top:0})
      
      }
    })
  },50)

  componentDidMount(){
    this.setState({jobList:this.props.jobList},()=>{
      this.timer=this.setTime()
    })
    
    
  }
  render(){
    return (
      <div className="new-job-box">
        <div className='new-job-left'>
          <div className="show-job">
            <span>最新职位</span>
            <span>
              更多
            </span>
          </div>
          <div className='over-hide-box'>
            <ul className='job-list' style={{top:this.state.top}}  
              onMouseEnter={()=>{
                this.timer&& clearInterval(this.timer)

              }} 
              onMouseLeave={()=>{
                this.timer=this.setTime()
              }}>
              {this.state.jobList.map((item,index)=>{
                return(
                  <li key={index}>
                    <span className="item-job">{item.value}</span>
                    <span className='item-place'>{item.place}</span>
                    <span className="item-time">{item.time}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='new-job-right'>
          <div className='ali-cloud'>
            <img src='https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png'></img>
          </div>
          <div className='alibaba-log'>
            <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt=""/>
          </div>
        </div>
     </div>
    ) 
  }

}
export default Newjob;
