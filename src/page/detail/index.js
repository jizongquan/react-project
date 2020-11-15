import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { 
    DetailWrapper,
    Header,
    Content
} from './style';
import { actionCreators } from './store';

class Detail extends PureComponent{
    render(){
        //带？的这么解析，和动态路由有区别
        // console.log(this.props.location.search.split('?')[1].split('=')[1])
        const {title,content} = this.props;
        return(
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html:content}}>
                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapState = (state)=>{
    return{
        title:state.getIn(['detail','title']),
        content:state.getIn(['detail','content'])
    }
}

const mapDispatch = (dispatch)=>{
    return{
        getDetail(id){
            dispatch(actionCreators.getDetail(id))
        }
    }
}
//withRouters是让组件有能力获取router中所有的参数
export default connect(mapState,mapDispatch)(withRouter(Detail));