import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd";
import { InputNumber, Input, Button, message } from "antd";
import InputBox from "./SignCodeNumber";
import { Link } from "react-router-dom";
import Message from "./Message";
import Password from "antd/es/input/Password";

const Header = () => {
  return (
    <ContainerHeader>
      <h1>
        <a href="#">시아티비</a>
      </h1>
    </ContainerHeader>
  );
};
const Section = () => {
  const [inputSignCode, setInputSignCode] = useState("");
  const [isOk, setIsOk] = useState(false);
  const [AlertIdSpan, setAlertIdSpan] = useState("");
  const [AlertPwSpan, setAlertPwSpan] = useState("");
  const [AlertRePwSpan, setAlertRePwSpan] = useState("");
  const [AlertNameSpan, setAlertNameSpan] = useState("");
  const [AlertTelSpan, setAlertTelSpan] = useState("");
  const [inputValueId, setInputValueId] = useState("");
  const [inputValuePw, setInputValuePw] = useState("");
  const [inputValueRePw, setInputValueRePw] = useState("");
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueTel, setInputValueTel] = useState("");
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputSignCode(value);
  };
  const handleOkClick = () => {
    if (true) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  };
  const JoinSubmit = () => {
    if (inputValueId === "") {
      setAlertIdSpan("아이디를 입력해주세요.");
      if (inputValueId === "") {
        setAlertIdSpan("");
      }
    } else {
      setAlertIdSpan("");
    }
    if (inputValuePw === "") {
      setAlertPwSpan("비밀번호를 입력해주세요.");
    } else {
      setAlertPwSpan("");
    }
    if (inputValueRePw === "") {
      setAlertRePwSpan("비밀번호를 재 입력해주세요.");
    } else {
      setAlertRePwSpan("");
    }
    if (inputValueName === "") {
      setAlertNameSpan("닉네임을 입력해주세요.");
    } else {
      setAlertNameSpan("");
    }
    if (inputValueTel === "") {
      setAlertTelSpan("텔레그램 ID를 입력해주세요.");
    } else {
      setAlertTelSpan("");
    }
  };
  return (
    <BoxSection>
      {!isOk && (
        <>
          <LoginForm>
            <LoginFormBox>
              <Input
                type="text"
                minlength="5"
                maxlength="13"
                title="아이디"
                placeholder="아이디를 입력해주세요"
              ></Input>
              <span class="miss_id">아이디가 올바르지 않습니다.</span>
            </LoginFormBox>
            <PasswordFormBox>
              <Input
                type="password"
                minlength="5"
                maxlength="13"
                title="패스워드"
                placeholder="비밀번호를 입력해주세요"
              ></Input>
              <span className="miss_password">
                비밀번호가 올바르지 않습니다.
              </span>
              <span className="not_info">정보가 올바르지 않습니다.</span>
            </PasswordFormBox>
            <OptionZone>
              <div className="autologin">
                <label className="autocheckbox">
                  {/* <input type="checkbox" name="autologin">
                    자동로그인
                  </input> */}
                </label>
              </div>
              <Button onClick={handleOkClick}>회원가입</Button>
            </OptionZone>
          </LoginForm>
          <Button type="primary" className="submit">
            로그인
          </Button>
        </>
      )}
      {isOk && (
        <div className="joinform">
          <div className="inputenter">
            <Input
              type="text"
              minlength="5"
              maxlength="13"
              title="아이디"
              placeholder="아이디를 입력해주세요"
              value={inputValueId}
              onChange={(e) => setInputValueId(e.target.value)}
            />
            <AlertId>{AlertIdSpan}</AlertId>
          </div>
          <div className="inputenter">
            <Input
              type="password"
              minlength="5"
              maxlength="13"
              title="패스워드"
              placeholder="비밀번호를 입력해주세요"
              value={inputValuePw}
              onChange={(e) => setInputValuePw(e.target.value)}
            />
          </div>
          <AlertPw>{AlertPwSpan}</AlertPw>
          <div className="inputenter">
            <Input
              type="password"
              minlength="5"
              maxlength="13"
              title="패스워드"
              placeholder="비밀번호를 재 입력해주세요"
              value={inputValueRePw}
              onChange={(e) => setInputValueRePw(e.target.value)}
            />
            <AlertRepw>{AlertRePwSpan}</AlertRepw>
          </div>
          <div className="inputenter">
            <ul>
              <li>
                <Input
                  className="inputname"
                  type="text"
                  minlength="5"
                  maxlength="13"
                  title="닉네임"
                  placeholder="닉네임을 입력해주세요"
                  value={inputValueName}
                  onChange={(e) => setInputValueName(e.target.value)}
                />
              </li>
              <li>
                <Message />
              </li>
            </ul>
            <AlertName>{AlertNameSpan}</AlertName>
          </div>
          <div className="inputenter">
            <Input
              type="email"
              minlength="5"
              maxlength="13"
              title="패스워드"
              placeholder="이메일 주소를 입력해주세요"
              value={inputValueTel}
              onChange={(e) => setInputValueTel(e.target.value)}
            />
            <AlertTel>{AlertTelSpan}</AlertTel>
          </div>
          <Button type="primary" className="submitclear" onClick={JoinSubmit}>
            회원가입
          </Button>
        </div>
      )}
    </BoxSection>
  );
};

const SignCode = () => {
  return (
    <>
      <Container>
        <Header />
        <Section />
      </Container>
    </>
  );
};

const LoginFormBox = styled.div`
  span {
    color: #8e8e;
    padding-left: 10px;
    display: none !important;
  }
`;

const PasswordFormBox = styled.div`
  span {
    color: #8e8e;
    padding-left: 10px;
    position: absolute;
    display: none !important;
  }
`;

const LoginForm = styled.div``;

const OptionZone = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .submitclear {
    width: 310px;
    height: 46px;
    text-align: center;
    margin-top: 15px;
    font-size: 15px;
    cursor: pointer;
    border: 0px;
    letter-spacing: 1px;
  }
`;

const ContainerHeader = styled.header`
  padding-bottom: 2%;
  h1 a {
    color: #fff;
  }
`;

const BoxSection = styled.section`
  .submit {
    width: 100%;
    height: 50px;
    margin-top: 15px;
    font-size: 17px;
  }
  .input-enter input {
    display: flex;
    width: 293px;
    height: 46px;
    text-align: center;
    margin: 0 auto;
    background: url(../img/code.svg) center right no-repeat;
    background-size: 30px;
    background-position-x: 230px;
    margin-top: 19px;
    margin-bottom: 30px;
    line-height: 46px;
    border-radius: 7px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input {
    display: flex;
    margin: 0 auto;
    font-size: 15px;
    padding-left: 15px;
    width: 310px;
    height: 50px;
  }
  .inputname {
    display: flex;
    width: 215px;
  }
  .check {
    height: 50px;
  }
`;

const AlertId = styled.span`
  margin-top: 5px;
  font-size: 13px;
  padding-left: 10px;
  color: #fff;
`;
const AlertPw = styled.span`
  margin-top: 5px;
  font-size: 13px;
  padding-left: 10px;
  color: #fff;
`;
const AlertRepw = styled.span`
  margin-top: 5px;
  font-size: 13px;
  padding-left: 10px;
  color: #fff;
`;
const AlertName = styled.span`
  margin-top: 5px;
  font-size: 13px;
  padding-left: 10px;
  color: #fff;
`;
const AlertTel = styled.span`
  margin-top: 5px;
  font-size: 13px;
  padding-left: 10px;
  color: #fff;
`;

export default SignCode;
