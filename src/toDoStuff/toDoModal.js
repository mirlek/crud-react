import { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);




function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Button className="button-add-tasks" onClick={handleShow} >
      Add New Task
        <FontAwesomeIcon icon="fa-solid fa-plus" className="plus-solid" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group 
              className="mb-3" 
              controlId="example.ControlInput1"
              >
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add what's important to do"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="example.ControlDatePicker1"
            >
              <Form.Label id='calendar'>Due date</Form.Label>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="example.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
