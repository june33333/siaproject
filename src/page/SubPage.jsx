import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Slider } from "antd";
import Header from "./Header";
import { Link } from "react-router-dom";
// import { MainSlider } from "./MainSlider";
import CustomSwiper from "../components/CustomSwiper";
import Footer from "./Footer";
import BxSlider from "./BxSlider";

const Guide = () => {
  return (
    <LinkNotice to="#">
      <Notice>
        2023.09.01 부터 시아티비 접속 방법이 변경됩니다 반드시 참고해주세요.
      </Notice>
    </LinkNotice>
  );
};

const SubPage = () => {
  return (
    <>
      <Header />
      <Guide />
      <CustomSwiper />
      {/* <BxSlider /> */}
      {/* <MainSlider /> */}
      {/* <Footer /> */}
    </>
  );
};

const Notice = styled.div`
  width: auto;
  height: 40px;
  text-align: center;
  background: skyblue;
  line-height: 40px;
  margin-top: 15px;
  color: #fff;
`;
const LinkNotice = styled(Link)``;

const container = styled.div`
  display: none;
`;

export default SubPage;
