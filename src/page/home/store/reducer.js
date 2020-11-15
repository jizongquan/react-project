import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage:1,
    showScroll:false
 })

const reducer = (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList:fromJS(action.topicList),
                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList)
            })
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                articleList:state.get('articleList').concat(fromJS(action.list)),
                articlePage:action.nextPage
            })
        case constants.TOOGE_SCROLL_TOP:
            return state.merge({
                showScroll:action.show
            })
        default:
        return state;
    }
}
export default reducer;