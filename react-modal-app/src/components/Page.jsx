import React from "react";
import { DarkBG, Wrapper, ButtonX, Modal, ModalHeader } from "./styles";

function Page() {
  return (
    <>
      <DarkBG />
      <Wrapper>
        <Modal>
          <ButtonX />
          <ModalHeader />
        </Modal>
      </Wrapper>
    </>
  );
}

export default Page;
