import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Create() {
  const navigate = useNavigate();

  const [show] = useState(true);

  const [addNewTaskTitle, setaddNewTaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [dueDate, setdueDate] = useState(new Date());

  const postData = () => {
    axios
      .post(`https://64ef1ed7219b3e2873c3f9ad.mockapi.io/todoData`, {
        addNewTaskTitle,
        taskDescription,
        dueDate,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <div>
        <Modal show={show} onHide={() => navigate(-1)}>
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
                />
              </Form.Group>
              <Form.Group
                className="mb-3 calendar1"
                controlId="example.ControlDatePicker1"
              >
                <Form.Label id="calendar">Due date</Form.Label>
                <DatePicker
                  selected={dueDate}
                  onChange={(date) => setdueDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="example.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => settaskDescription(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Close
            </Button>
            <Button variant="outline-success" onClick={postData} type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Create;
