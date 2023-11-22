import React, { useState } from "react";
import { Input, Tooltip } from "antd";
import styled from "styled-components";

const formatNumber = (value) => new Intl.NumberFormat().format(value);

const NumericInput = (props) => {
  const { value, onChange } = props;

  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.

  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === "." || value === "-") {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, "$1"));
  };

  const title = value ? (
    <span className="numeric-input-title">
      {value !== "-" ? formatNumber(Number(value)) : "-"}
    </span>
  ) : (
    ""
  );

  return (
    <>
      <InputContainer>
        <Tooltip>
          <Input
            className="input"
            {...props}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="가입코드"
            maxLength={16}
          />
        </Tooltip>
      </InputContainer>
    </>
  );
};

const InputContainer = styled.div`
  .input {
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
`;

export default NumericInput;
