import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Update() {
  const navigate = useNavigate();

  const [show] = useState(true);

  const [addNewTaskTitle, setaddNewTaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [dueDate, setdueDate] = useState(new Date());

  const updateAPIData = () => {
    axios
      .put(`https://64ef1ed7219b3e2873c3f9ad.mockapi.io/todoData/${id}`, {
        addNewTaskTitle,
        taskDescription,
        dueDate,
      })
      .then(() => {
        navigate("/read");
      });
  };

  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setaddNewTaskTitle(localStorage.getItem("Your task"));
    setdueDate(localStorage.getItem("Due Date"));
    settaskDescription(localStorage.getItem("To-Do"));
  }, []);

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
                  placeholder="Your task"
                  autoFocus
                  onChange={(e) => setaddNewTaskTitle(e.target.value)}
                  value={addNewTaskTitle}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
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
                  value={taskDescription}
                  placeholder="To-Do"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Close
            </Button>
            <Button
              variant="outline-success"
              type="submit"
              onClick={updateAPIData}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Update;
