import styled from 'styled-components';
import lognPng from '../../statics/login.png';

export const HeaderWrapper = styled.div`　
    height:58px;
    border-bottom:1px solid #f0f0f0;
    position:relative;
`;

export const Login = styled.a.attrs({
    href:'/'
})`　
    height:56px;
    position:absolute;
    top:0;
    display:block;
    width:100px;
    left:0;
    background:url(${lognPng});
    background-size:contain;
`;

export const Nav = styled.div`
    width:960px;
    height:100%;
    box-sizing:border-box:
    padding-right:70px;
    margin: 0 auto;
`;
export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:20px 20px 0;
    background:#fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`;
export const SearchInfoTitle = styled.div`
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;

export const SearchInfoItem = styled.a`
    font-size:12px;
    line-height:20px;
    float:left;
    padding:0 5px;
    border:1px solid #ddd;
    color:#969696;
    border-radius:2px;
    display:block;
    margin-right:10px;
    margin-bottom:15px;
    color:#333;
`;

export const SearchInfoList = styled.div`
    overflow:hidden;
`

export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        display:inline-block;
        float:left:
        font-size:12px;
        margin-right:2px;
        transition:all .2s ease-in;
        transform-origin:center center;
    }
`;

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    cursor:pointer;
    &.left {
        float:left
    }
    &.right {
        float:right;
        color:#969696
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    margin-top:10px;
    margin-left:20px;
    border:none;
    outline:none;
    font-size:14px;
    border-radius:19px;
    background:#eee;
    color:#666;
    &::placeholder {
        color:#999;
    }
    &.focuse{
        width:240px;
    }
`;

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;

export const Button  = styled.div`
    float:right;
    line-height:38px;
    margin-top:10px;
    padding:0 20px;
    margin-right:20px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149;
        cursor:pointer;
    }
    &.reg:hover{
        color: #ec6149;
        border-color: #ec6149;
        background-color: rgba(236,97,73,.05);
    }
    &.writting{
        color:#fff;
        background:#ec6149;
        cursor:pointer;
    }
`;

export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .slide-enter{
        width:160px;
        transition:all .2s ease-out
    }
    .slide-enter-active{
        width:240px;
    }
    .slide-exit{
        transition:all .2s ease-out
    }
    .zoom{
        position:absolute;
        right:0;
        bottom:5px;
        width:30px;
        height:30px;
        border-radius:15px;
        line-height:30px;
        text-align:center;
        &.focuse{
            background:#777;
            color:#fff;
        }
    }
`;