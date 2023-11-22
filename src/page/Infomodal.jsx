import React, { useState } from "react";
import { Button, Modal, Input, Space } from "antd";
import styled from "styled-components";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import SignCode from "./SignCode";

const Infomadal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{ background: "none", width: "auto", height: "auto" }}
      >
        <span class="material-symbols-sharp">account_circle</span>
      </Button>
      <Modal
        style={{ fleXdirection: "column", margin: "0 auto" }}
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space direction="vertical">
          <SignCode />
        </Space>
      </Modal>
    </>
  );
};

export default Infomadal;
