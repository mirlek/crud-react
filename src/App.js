import "./style/App.css";

import React, { useState, useEffect } from "react";

import axios from "axios";
import { Modal, Button, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parseISO } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        getData();
      });
  };

  //// from Update

  // const updateAPIData = () => {
  //   axios
  //     .put(`https://64ef1ed7219b3e2873c3f9ad.mockapi.io/todoData/${id}`, {
  //       addNewTaskTitle,
  //       taskDescription,
  //       dueDate,
  //     })
  //     .then(() => {
  //       getData();
  //     });
  // };

  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setaddNewTaskTitle(localStorage.getItem("Your task"));
    setDueDate(localStorage.getItem("Due Date"));
    settaskDescription(localStorage.getItem("To-Do"));
  }, []);

  //// from read

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://64ef1ed7219b3e2873c3f9ad.mockapi.io/todoData`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    console.log(data);
    let { id, addNewTaskTitle, taskDescription, dueDate } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Your Task", addNewTaskTitle);
    localStorage.setItem("Due Date", dueDate);
    localStorage.setItem("To-Do", taskDescription);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://64ef1ed7219b3e2873c3f9ad.mockapi.io/todoData/${id}`)
      .then(() => {
        getData();
      });
  };
  const getData = () => {
    axios
      .get(`https://64ef1ed7219b3e2873c3f9ad.mockapi.io/todoData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <div className="App">
      <div className="todo-menu">
        <p>To-DO List</p>
        <div>
          <Button className="button-add-tasks" onClick={handleShow}>
            Add New Task
            <FontAwesomeIcon icon="fa-solid fa-plus" className="plus-solid" />
          </Button>

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
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 calendar1"
                  controlId="example.ControlDatePicker1"
                >
                  <Form.Label id="calendar">Due date</Form.Label>
                  <DatePicker
                    selected={parseISO(dueDate)}
                    onChange={(date) =>
                      setDueDate(date.toISOString().split("T")[0])
                    }
                    dateFormat={"dd/MM/yyyy"}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="example.ControlTextarea1"
                >
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

        <div className="cardsStock">
          <Card>
            <Card.Body>
              {APIData.map((data) => {
                return (
                  <div className="toDoListCard">
                    <Card.Title>{data.addNewTaskTitle}</Card.Title>
                    <Card.Text>{data.dueDate}</Card.Text>
                    <Card.Text>{data.taskDescription}</Card.Text>
                    <div className="change-buttons">
                      <Button
                        variant="outline-success"
                        className="button-edit"
                        onClick={() => {
                          setData(data);
                          handleShow();
                        }}
                      >
                        <FontAwesomeIcon
                          icon="fa-solid fa-pen"
                          className="pen-solid"
                        />
                      </Button>
                      <Button
                        variant="outline-secondary"
                        className="button-delete"
                        onClick={() => onDelete(data.id)}
                      >
                        <FontAwesomeIcon
                          icon="fa-solid fa-trash"
                          className="trash-solid"
                          alt="trash-solid"
                        />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
