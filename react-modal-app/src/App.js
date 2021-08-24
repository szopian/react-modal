import { GlobalStyles, PrimaryButton } from "./components/styles";
import Modal from "./components/Modal.jsx";
import React, { useState } from "react";
import Button from "./components/Button.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlobalStyles />

      <Button
        text="Open Modal"
        bgColor="#185adb"
        rgbaShadow="24, 90, 219"
        onClick={() => setIsOpen(true)}
      />

      <PrimaryButton onClick={() => setIsOpen(true)}>Open Modal</PrimaryButton>

      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}

export default App;
