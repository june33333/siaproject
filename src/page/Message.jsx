import React from "react";
import { Button, message, Space } from "antd";
import styled from "styled-components";

const Message: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "사용가능한 닉네임입니다.",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "This is an error message",
    });
  };

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "This is a warning message",
    });
  };

  return (
    <>
      {contextHolder}
      <CheckBox>
        <Button className="button" type="primary" onClick={success}>
          중복체크
        </Button>
      </CheckBox>

      {/* <Button type="primary" onClick={success}>
          중복체크
        </Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button> */}
    </>
  );
};

const CheckBox = styled.div`
  button {
    height: 50px;
  }
`;

export default Message;
