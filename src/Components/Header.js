import React from "react";
import {Link,withRouter} from  "react-router-dom";
import styled from "styled-components";


const Header = styled.header`
    color:black;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height: 50px;
    display:flex;
    align-items:center;
    padding:0px 10px;
    background-color:rgb(27,174,197);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;

`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom:5px solid ${props=>props.current ? "#38445D" : "transparent"};
  transition: border-bottom 0.3s ease-in-out
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
    <Header>
      <List>
        <Item>
            <SLink><div>KT</div></SLink>
        </Item>
        <Item current={pathname === "/pay"}>
          <SLink to="/pay">다이렉트</SLink>
        </Item>
        <Item current={pathname === "/payment"}>
          <SLink to="/payment">마이페이지</SLink>
        </Item>
        <Item current={pathname === "/check"}>
          <SLink to="/check">상품서비스</SLink>
        </Item>
        <Item>
            <SLink><div>멤버쉽/혜택</div></SLink>
        </Item>
        <Item>
            <SLink><div>이벤트</div></SLink>
        </Item>
        <Item>
            <SLink><div>고객지원</div></SLink>
        </Item>
        <Item>
            <SLink><div>Shop</div></SLink>
        </Item>
      </List>
    </Header>
    
  ));