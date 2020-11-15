import axios from 'axios';
import * as constants from './constants';
// import {fromJS} from 'immutable';

const changHomeData = (result)=>{
    return{
        type:constants.CHANGE_HOME_DATA,
        topicList:result.topicList,
        articleList:result.articleList,
        recommendList:result.recommendList
    }
}

export const getHomeInfo = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            const action = changHomeData(result)
            dispatch(action)
        }).catch((err)=>{
            console.log(err)
        });
    }
}

export const addHomeList = (list,nextPage)=>{
    return{
        type:constants.ADD_ARTICLE_LIST,
        list:list,
        nextPage
    }
}

export const getMoreList  = (page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+ page).then((res)=>{
            const result = res.data.data;
            dispatch(addHomeList(result,page + 1))
        }).catch((err)=>{
            console.log(err)
        });
    }
}

export const toggleTopShow = (show) =>{
    return{
        type:constants.TOOGE_SCROLL_TOP,
        show
    }
}