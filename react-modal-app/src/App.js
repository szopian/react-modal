import { GlobalStyles, PrimaryButton } from "./components/styles";
import Modal from "./components/Modal.jsx";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <GlobalStyles />
      <PrimaryButton onClick={() => setIsOpen(true)}>Open Modal</PrimaryButton>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}

export default App;
