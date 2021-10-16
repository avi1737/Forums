import Button from 'react-bootstrap/Button';
import React from 'react'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

function ModalPopup(props) {
    const [show, setShow] = useState(false);
    const ModalBody = props.body;
    const ModalClickComponent = props.ClickComponent;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleMethods(){
      props.method();
    }
  
    return (
      <>
        <div onClick={handleShow}>
          <ModalClickComponent/>
        </div>
  
        <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>{props.heading}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
              <ModalBody/>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleMethods}>
              {props.buttonSave}
            </Button>
          </Modal.Footer>

        </Modal>
      </>
    );
  }

export default ModalPopup;
