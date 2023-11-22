import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterBox>
        <Sia>
          <FooterInfo>
            <Link to="#">공지사항</Link>
            <Link to="#">최근 시아티비 사칭 관련 안내</Link>
          </FooterInfo>
        </Sia>
        <Tou>
          <Link to="#">사이트 소개</Link>
          <span></span>
          <Link to="#">이용약관</Link>
          <span></span>
          <Link to="#">개인정보 취급방침</Link>
          <span></span>
          <Link to="#">비상주소 확인하기</Link>
          <span></span>
          <Link to="#">자료요청</Link>
          <span></span>
          <Link to="#">모바일 버전</Link>
        </Tou>
        <Copy>
          <p>
            시아티비 서비스는 무료 OTT 서비스입니다 자료요청은 요청 페이지에서
            접수 하실 수 있습니다
          </p>
          <p>
            회사명 : 시아TV 사업장 주소 : <span>상록수역 투썸</span> 2층 연락처
            : 112
          </p>
          <p>광고문의 및 문의사항 메일 : police@korea.co.kr</p>
          <p>Copyright © SiaTv All right reserved.</p>
        </Copy>
      </FooterBox>
    </>
  );
};

const FooterBox = styled.div`
  width: auto;
  height: 278px;
  margin-top: 82px;
  color: #fff;
`;
const Sia = styled.div`
  width: 100vw;
  height: 55px;
  margin-left: calc(-50vw + 50%);
  border: 1px solid #fff;
  background: #0a0a0a;
  border-top: 1px solid #262626;
  border-bottom: 1px solid #262626;
  border-left: 0px;
  line-height: 55px;
`;
const FooterInfo = styled.div`
  width: 1200px;
  margin: 0 auto;
  a {
    color: #b6b6b6;
  }
  a:hover {
    color: #fff;
  }
  a:nth-child(1) {
    margin-right: 2%;
  }
`;
const Tou = styled.div`
  width: 700px;
  height: 70px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  a {
    color: #b6b6b6;
  }
  a:hover {
    color: #fff;
  }
  span {
    background: #555;
    width: 1px;
    height: 15px;
    margin-top: 4%;
  }
`;
const Copy = styled.div`
  p {
    color: #b6b6b6;
    margin-bottom: 1%;
  }
  span {
    text-decoration: underline;
  }
`;
export default Footer;
