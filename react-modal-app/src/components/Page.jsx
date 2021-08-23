import React from "react";
import {
  DarkBG,
  Wrapper,
  ButtonX,
  Modal,
  ModalHeader,
  Heading,
  ModalContent,
  ModalActions,
  ActionsContainer,
  DeleteButton,
} from "./styles";

function Page({ setIsOpen }) {
  return (
    <>
      <DarkBG onClick={() => setIsOpen(false)} />
      <Wrapper>
        <Modal>
          <ButtonX onClick={() => setIsOpen(false)} />
          <ModalHeader>
            <Heading>Heading</Heading>
          </ModalHeader>
          <ModalContent>Are you Modal Content?</ModalContent>
        </Modal>
        <ModalActions>
          <ActionsContainer>
            <DeleteButton onClick={() => setIsOpen(false)}>Delete</DeleteButton>
          </ActionsContainer>
        </ModalActions>
      </Wrapper>
    </>
  );
}

export default Page;
