import React, { useState } from "react";
import styled from "styled-components";
import Infomadal from "./Infomodal";
import SignCode from "./SignCode";

const Header = () => {
  return (
    <>
      <HeaderNav>
        <ul>
          <li>
            <HeaderLogo>
              <h1>
                <a href="#">시아티비</a>
              </h1>
            </HeaderLogo>
          </li>
          <li>
            <a href="#">인기영상</a>
          </li>
          <li>
            <a href="#">카테고리</a>
          </li>
          <li>
            <a href="#">APP다운로드</a>
          </li>
        </ul>
        <HeaderUser>
          <ul>
            <li>
              <a href="#">
                <span class="material-symbols-sharp">search</span>
              </a>
            </li>
            <li>
              <Infomadal />
            </li>
          </ul>
        </HeaderUser>
      </HeaderNav>
    </>
  );
};

const HeaderNav = styled.div`
  ul {
    display: inline-flex;
    align-items: center;
  }
  li {
    width: 130px;
    height: auto;
  }
  li:nth-child(1) {
    padding-right: 13%;
  }
  a {
    color: #fff;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 70px;
`;
const HeaderLogo = styled.div``;
const HeaderUser = styled.div`
  ul {
    display: inline-flex;
    align-items: center;
  }
  li {
    width: 50px;
    height: auto;
  }
  span {
    font-size: 30px;
    vertical-align: text-top;
    color: #fff;
    font-weight: 300;
  }
`;
export default Header;
