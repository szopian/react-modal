import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  margin: 20px 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 17px 35px;
  border-radius: 10px;
  font-size: 0.8rem;
  border: none;
  color: white;
  background: ${(props) => props.BtnBgColor};
  transition: all 0.25s ease;

  &&:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px -10px rgba(${(props) => props.BtnShadowColor}, 0.6);
  }
`;

const Button = ({ text, rgbaShadow, bgColor }) => {
  return (
    <Btn BtnBgColor={bgColor} BtnShadowColor={rgbaShadow}>
      {text}
    </Btn>
  );
};

export default Button;
