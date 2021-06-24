import React, { useState } from "react";
import "rsuite/dist/styles/rsuite-default.css";
import { ButtonToolbar, Button, Icon, Modal } from "rsuite";
import useModelState from "./custom-hook";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [register, IsRegister] = useState(false);
  const { isOpen, open, close } = useModelState();
  const [login, isLogin] = useState(false);
  const checkyouRegister = () => {
    IsRegister(!register);
  };
  const checkyouLogin = () => {
    isLogin(!login);
    close();
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <strong>Please give your feedback</strong>
      </h1>
      <p style={{ textAlign: "center" }}>
        <strong>Please Register yourself First</strong>
      </p>
      {login && <h1>write your Comment</h1>}

      <ButtonToolbar style={{ marginLeft: "48%", marginTop: "2%" }}>
        {login ? (
          <Button color="yellow">
            <Icon icon="send" /> Send your Feedback
          </Button>
        ) : (
          <Button color="yellow" onClick={open}>
            <Icon icon="plus-square" /> Register
          </Button>
        )}
      </ButtonToolbar>
      {!register && (
        <Modal show={isOpen} onHide={close}>
          <Modal.Header>
            <Modal.Title>Register here </Modal.Title>
          </Modal.Header>
          <Modal.Body>you Register here</Modal.Body>
          <Modal.Footer>
            <Button onClick={checkyouRegister}>Register</Button>
          </Modal.Footer>
        </Modal>
      )}

      {register && (
        <Modal show={isOpen} onHide={close}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>you Login here</Modal.Body>
          <Modal.Footer>
            <Button onClick={checkyouLogin}>Login</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default App;
