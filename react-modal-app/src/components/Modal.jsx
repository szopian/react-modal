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
  CancelButton,
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
          <ModalContent>Are you sure you want to delete the item?</ModalContent>
          <ModalActions>
            <ActionsContainer>
              <DeleteButton onClick={() => setIsOpen(false)}>
                Delete
              </DeleteButton>
              <CancelButton onClick={() => setIsOpen(false)}>
                Cancel
              </CancelButton>
            </ActionsContainer>
          </ModalActions>
        </Modal>
      </Wrapper>
    </>
  );
}

export default Page;
