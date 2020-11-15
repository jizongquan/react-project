import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title,content)=>{
    return{
        type:constants.CHANGE_DETAIL,
        title,
        content
    }
};

export const getDetail = (id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json',{
            params:{
                id
            }
        }).then((res)=>{
            const result = res.data.data;
            dispatch(changeDetail(result.title,result.content))
        })
    }
}