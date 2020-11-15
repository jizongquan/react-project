import React,{PureComponent} from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {actionCreators} from './store';
import {BackTop} from './style';


class Home extends PureComponent{
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents()
    }
    handleScrollTop = ()=>{
        window.scrollTo(0,0);
    }


    bindEvents = ()=>{
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }

    componentWillUnmount(){
        //解绑window事件
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img
                    className="banner_img"
                    alt="banner"
                    src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {
                
                    this.props.showScroll ?
                    <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:
                    null
                
                }
                
            </HomeWrapper>
        )
    }
}

const mapState = (state)=>{
    return{
        showScroll:state.getIn(['home','showScroll'])
    }
}

const mapDispatch = (dispatch)=>{
    return{
        changeHomeData(){
            const action = actionCreators.getHomeInfo();
            dispatch(action);
        },
        changeScrollTopShow(){
            if(document.documentElement.scrollTop > 400){
                dispatch(actionCreators.toggleTopShow(true))
            }else{
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
    }
}
export default connect(mapState,mapDispatch)(Home);