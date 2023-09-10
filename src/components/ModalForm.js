import React, { useState } from "react";
import axios from "axios";
import "../style/App.css";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ToDoList from "./ToDoList";

function ModalForm() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const [addNewTaskTitle, setaddNewTaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());

  const postData = () => {
    axios
      .post(`https://64ef1ed7219b3e2873c3f9ad.mockapi.io/todoData`, {
        addNewTaskTitle,
        taskDescription,
        dueDate,
      })
      .then(() => {
        <ToDoList />;
      });
  };

  return (
    <div className="modal">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="example.ControlInput1">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add what's important to do"
                autoFocus
                onChange={(e) => setaddNewTaskTitle(e.target.value)}
                value={addNewTaskTitle}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 calendar1"
              controlId="example.ControlDatePicker1"
            >
              <Form.Label id="calendar">Due date</Form.Label>
              <DatePicker
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                dateFormat={"dd/MM/yyyy"}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="example.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => settaskDescription(e.target.value)}
                value={taskDescription}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="outline-success"
            onClick={() => {
              postData();
              handleClose();
            }}
            type="submit"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalForm;
