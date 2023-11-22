import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CustomSwiper = () => {
  return (
    <>
      <AstBox>
        <Link to="#">
          <AstBox01>배너문의 하단 이메일로 연락 바랍니다.</AstBox01>
        </Link>
        <Link to="#">
          <AstBox02>배너문의 하단 이메일로 연락 바랍니다.</AstBox02>
        </Link>
        <Link to="#">
          <AstBox03>배너문의 하단 이메일로 연락 바랍니다.</AstBox03>
        </Link>
        <Link to="#">
          <AstBox04>배너문의 하단 이메일로 연락 바랍니다.</AstBox04>
        </Link>
      </AstBox>
    </>
  );
};

const AstBox = styled.div`
  margin-top: 1%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  align-content: space-between;
  div {
    width: 550px;
    height: 70px;
    background: #555;
    text-align: center;
    line-height: 70px;
    font-size: 18px;
    color: #fff;
  }
  div:nth-child(1) {
    margin-bottom: 1%;
  }
`;

const AstBox01 = styled.div``;
const AstBox02 = styled.div``;
const AstBox03 = styled.div``;
const AstBox04 = styled.div``;

export default CustomSwiper;
