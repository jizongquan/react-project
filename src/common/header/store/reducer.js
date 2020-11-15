import * as actionTypes from './constants';
//利用immutable不可变值来管理state，fromJS可以把js对象转换成immutable对象
import { fromJS } from 'immutable';

// const defaultState = {
//     focused:false
//  }
const defaultState = fromJS({
    focused:false,
    list:[],
    page:1,
    totalPage:1,
    mouseIn:false
 })

const reducer = (state=defaultState,action)=>{
    //用switch代替if语句
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused',true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused',false);
        case actionTypes.CHANGE_LIST:
            //state,merge({}),可以将set合并都是immutable中的用法
            // return state.set('list',action.data).set('totalPage',action.totalPage);
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
        return state;
    }
    // if(action.type === actionTypes.SEARCH_FOCUS){
    //     //immutable里面有set方法
    //     return state.set('focused',true);
    // }
    // if(action.type === actionTypes.SEARCH_BLUR){
    //     return state.set('focused',false);
    //     // return {
    //     //     focused:false 
    //     // }
    // }
    // if(action.type === actionTypes.CHANGE_LIST){
    //     return state.set('list',action.data);
    // }
    // return state;
}
export default reducer;