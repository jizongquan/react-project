import React,{PureComponent} from 'react';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';

class List extends PureComponent{
    render(){
        const {articleList,getMoreList,page} = this.props;
        return(
            <div>
                {
                    articleList.map((item,index)=>{
                        return(
                            <Link key={index} to={`/detail/${item.get('id')}`}>
                                <ListItem >
                                    <img
                                    className = "pic"
                                    src={item.get('imgUrl')}
                                    alt=""/>
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                 {
                    articleList.map((item,index)=>{
                        return(
                            <Link key={index} to={`/details?id=${item.get('id')}`}>
                                <ListItem >
                                    <img
                                    className = "pic"
                                    src={item.get('imgUrl')}
                                    alt=""/>
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={()=>{getMoreList(page)}}>更多文字</LoadMore>
            </div>
            
        )
    }
}

const mapState = (state)=>{
    return{
        articleList:state.getIn(["home",'articleList']),
        page:state.getIn(["home",'articlePage'])
    }
}

const mapDispatch = (dispatch)=>{
    return{
        getMoreList(page){
            console.log(page)
            dispatch(actionCreators.getMoreList(page))
        }
    }
}

export default connect(mapState,mapDispatch)(List);