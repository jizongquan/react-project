import * as actionTypes from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changList = (data)=>{
    return{
        type: actionTypes.CHANGE_LIST,
        data:fromJS(data),
        totalPage:Math.ceil(data.length / 10)
    }
}

export const searchFocus = ()=>{
    return{
        type: actionTypes.SEARCH_FOCUS
    }
}

export const searchBlur = ()=>{
    return{
        type: actionTypes.SEARCH_BLUR
    }
}

export const mouseEnter = ()=>{
    return{
        type: actionTypes.MOUSE_ENTER
    }
}

export const mouseLeave = ()=>{
    return{
        type: actionTypes.MOUSE_LEAVE
    }
}

export const changePageList = (page)=>{
    return{
        type:actionTypes.CHANGE_PAGE,
        page
    }
}

export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data;
            dispatch(changList(data.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}