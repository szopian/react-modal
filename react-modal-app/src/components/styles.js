import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";

export const GlobalStyles = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const DarkBG = styled.div`
  background-color: rgba(255, 153, 153, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Modal = styled.div`
  max-width: 400px;
  min-height: 200px;
  background: white;
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

export const ModalHeader = styled.div`
  height: 50px;
  background: white;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Heading = styled.h5`
  margin: 0;
  padding: 10px;
  color: #2c3e50;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

export const ButtonX = styled(RiCloseLine)`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  color: #2c3e50;
  background: white;
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -7px;
  margin-right: -7px;

  &&:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: translate(-4px, 4px);
  }
`;

export const ModalContent = styled.p`
  padding: 10px;
  font-size: 14px;
  color: #2c3e50;
  text-align: center;
`;

export const ModalActions = styled.div`
  position: absolute;
  bottom: 2px;
  margin-bottom: 10px;
  width: 100%;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DeleteButton = styled.button`
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 17px 35px;
  border-radius: 10px;
  font-size: 0.8rem;
  border: none;
  color: #fff;
  background: #ff3e4e;
  transition: all 0.25s ease;

  &&:hover {
    box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
    transform: translateY(-5px);
    background: #ff3e4e;
  }
`;

export const CancelButton = styled.button`
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 17px 35px;
  border-radius: 10px;
  font-size: 0.8rem;
  border: none;
  color: #2c3e50;
  background: #fcfcfc;
  transition: all 0.25s ease;

  &&:hover {
    box-shadow: none;
    transform: none;
    background: whitesmoke;
  }
`;

export const PrimaryButton = styled.button`
  margin: 20px 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 17px 35px;
  border-radius: 10px;
  font-size: 0.8rem;
  border: none;
  color: white;
  background: #185adb;
  transition: all 0.25s ease;

  &&:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px -10px rgba(24, 90, 219, 0.6);
  }
`;
