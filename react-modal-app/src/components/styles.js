import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";

export const GlobalStyles = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const DarkBG = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  color: #fff;
`;

export const ButtonX = styled(RiCloseLine)``;

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
