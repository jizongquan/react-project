import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    login:false
 })

const reducer = (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_LOGIN:
            return state.merge({
                login:action.value
            })
        case constants.CHANGE_LOGOUT:
            return state.merge({
                login:action.value
            })
        default:
        return state;
    }
}
export default reducer;