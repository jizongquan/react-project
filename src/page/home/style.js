import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;

export const HomeLeft = styled.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner_img{
        width:625px;
        height:270px;
    }
`;

export const HomeRight = styled.div`
    width:280px;
    float:right
`;

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    padding-right:10px;
    margin-left:18px;
    font-size:14px;
    border:1px solid #dcdcdc;
    border-radius:4px;
    margin-bottom:18px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;

export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        width:125px;
        height:100px;
        display:block;
        float:right;
        border-radius:10px;
    }
`;

export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
    }
`;

export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`;

export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>{return props.imgUrl}});
    background-size:contain;
`;

export const WriterWrapper = styled.div`
    width:278px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    height:100px;
    line-height:100px;
    text-align:center
`;

export const LoadMore = styled.div`
    width:100%;
    height:40px;
    text-align:center;
    line-height:40px;
    background:#a5a5a5;
    border-raiud:20px;
    color:#fff;
    margin:30px 0;
    cursor:pointer;
`;

export const BackTop = styled.div`
    position:fixed;
    width:80px;
    right:100px;
    bottom:100px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    cursor:pointer;
`