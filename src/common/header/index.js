import React,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
import {actionCreators as loginActionCreator} from '../../page/login/store';
import {
    searchFocus,
    searchBlur,
    getList,
    mouseEnter,
    mouseLeave,
    changePageList
} from './store/actionCreator';
// import * as actionCreators from './store/actionCreator';

import {
    HeaderWrapper,
    Login,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';
import {Link} from 'react-router-dom';

class Header extends Component{

    getListArea = ()=>{
        const {
            focused,
            mouseIn,
            list,
            page,
            totalPage,
            handleMouseEnter,
            handleMouseLeave,
            handleChangePage
        } = this.props;
        const newList = list.toJS();//immutable,把immutable数组转化成js正常数组
        const pageList = [];
        if(newList.length && newList.length !== 'undefined'){
            for(let i = (page-1) * 10;i<page*10;i++){
                if(newList[i] !== undefined){
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
            }
        }
        if(focused || mouseIn){
            return(
                <SearchInfo
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                        onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}>
                            <span ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe606;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
    }


    render(){
        const {
            focused,
            handeleInputFocus,
            handeleInputBlur,
            list,
            login,
            logout
        } = this.props;
        return(
            <HeaderWrapper>
                <Login/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                    login?<NavItem onClick={logout} className="right">退出</NavItem>:
                    <Link to="/login"><NavItem className="right">登陆</NavItem></Link>
                    }
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={2000}
                            classNames ="slide"
                        >
                            <NavSearch
                            onFocus={()=>{handeleInputFocus(list)}}
                            onBlur={handeleInputBlur}
                            className={focused? 'focuse':''}></NavSearch>
                        </CSSTransition>
                        <span className={focused?'focuse iconfont zoom':'iconfont zoom'}>&#xe60c;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="writting">
                            <span className="iconfont">&#xe615;</span>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}




const mapStateToProps = (state)=>{
    return{
        //immutable中获取store数据用get,combineReducers从redux中导入下面写法
        // focused:state.header.get('focused')
        //combineReducers从redux-immutable中导入的写法
        // focused:state.get('header').get('focused')
        //第二种写法
        focused:state.getIn(['headers','focused']),
        list:state.getIn(['headers','list']),
        page:state.getIn(['headers','page']),
        totalPage:state.getIn(['headers','totalPage']),
        mouseIn:state.getIn(['headers','mouseIn']),
        login:state.getIn(['login','login'])
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        handeleInputFocus(list){
            if(list.size === 0){
                dispatch(getList());
            }
            dispatch(searchFocus())
        },
        handeleInputBlur(){
            const action = searchBlur();
            dispatch(action)
        },
        handleMouseEnter(){
            dispatch(mouseEnter())
        },
        handleMouseLeave(){
            dispatch(mouseLeave())
        },
        handleChangePage(page,totalPage,spin){
            //replace下面的意思是如果不是0-9的数字就替换成空
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                //以10进制转化成数字
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0
            }
            spin.style.transform = 'rotate('+(originAngle + 360)+'deg)'
            if(page < totalPage){
                dispatch(changePageList(page + 1))
            }else{
                dispatch(changePageList(1))
            }
        },
        logout(){
            dispatch(loginActionCreator.logout())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);