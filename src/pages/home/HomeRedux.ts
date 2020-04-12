import {composeTypes,createAction,ActionType,AsyncTuple,ThunkAction} from "iron-redux";


enum BasicTypes {
    spliceLoop,
    reduceTop,
    setJobList,

}

enum FetchTypes {
    getJobLists,
    

}

const prefix = 'ALIBABA';

const Types=composeTypes({
    BasicTypes,
    FetchTypes,
    prefix

})

export const actions ={
    spliceLoop:createAction(Types.spliceLoop)<any>(),
    reduceTop:createAction(Types.reduceTop)<number>(),
    setJobList:createAction(Types.setJobList)<string>(),
       
}

export class InitialState{
    navArr:{text:string,url:string|null}[]=[
        {text:"社招官网",url:null},
        {text:"首   页",url:"https://job.alibaba.com/zhaopin/index.htm"},
        {text:"社会招聘",url:"https://job.alibaba.com/zhaopin/positionList.htm"},
        {text:"校园招聘",url:"https://campus.alibaba.com"},
        {text:"了解阿里",url:"https://job.alibaba.com/zhaopin/about.htm"},
        {text:"个人中心",url:"https://job.alibaba.com/zhaopin/apply.htm"}
    ]

    jobList:{value:string,time:string,place:string}[]=[
      {value:"阿里云智能事业群-电力行业高级解决方案架构师-杭州",time:"3分钟前",place:"杭州"},
      {value:"阿里云智能事业群-电力行业高级解决方案架构师-杭州",time:"20分钟前",place:"杭州"},
      {value:"Alibaba Cloud Intelligence-高级解决方案架构师（泛互联网行业）-Hangzhou",time:"3分钟前",place:"杭州"},
      {value:"java",time:"3分钟前",place:"杭州"},
      {value:"java",time:"3分钟前",place:"杭州"},
      {value:"IOS",time:"3分钟前",place:"杭州"},
      {value:"IOS",time:"3分钟前",place:"杭州"},
      {value:"IOS",time:"3分钟前",place:"杭州"},
      {value:"IOS",time:"3分钟前",place:"杭州"},
      {value:"IOS",time:"3分钟前",place:"杭州"},
      {value:"前端",time:"3分钟前",place:"杭州"},
      {value:"前端",time:"3分钟前",place:"杭州"},
      {value:"前端",time:"3分钟前",place:"杭州"},
      {value:"前端",time:"3分钟前",place:"杭州"},
      {value:"JS",time:"3分钟前",place:"杭州"},
      {value:"JS",time:"3分钟前",place:"杭州"},
      {value:"PHP",time:"3分钟前",place:"杭州"},
      {value:"PHP",time:"3分钟前",place:"杭州"},
      {value:"REACT",time:"3分钟前",place:"杭州"},
      {value:"VUE",time:"3分钟前",place:"杭州"},
    ]

    timer:any=null
}

export default (state=new InitialState(),action: ActionType<typeof actions>):InitialState=>{
        switch (action.type){
            case Types.spliceLoop:
                const newState=state
                const newJobList=newState.jobList;
                const splitarr=newJobList.splice(0,10)
                newState.jobList=newJobList.concat(splitarr)
            return newState;
            case Types.setJobList:
                return state
            case Types.reduceTop:
                return state
            default:
                return AsyncTuple.handleAll(prefix,state,action)
    
        }
     
}