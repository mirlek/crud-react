import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {APIHost} from "../appConfig";
import "../style/App.css";

export interface ModalParams {
    updatedItem?: any
    showModal?: () => void
    onClose?: () => void
    onHide?: () => void
    onClick?: () => void
  }

const ModalForm = ({showModal, onClose, updatedItem}: ModalParams) => {

    const [addNewTaskTitle, setAddNewTaskTitle] = useState<string>('');
    const [taskDescription, setTaskDescription] = useState<string>('');
    const [dueDate, setDueDate] = useState(new Date());

    useEffect(() => {
        if (updatedItem) {
            const {
                addNewTaskTitle: addNewTaskTitleBase,
                taskDescription: taskDescriptionBase,
            } = updatedItem
            setAddNewTaskTitle(addNewTaskTitleBase)
            setTaskDescription(taskDescriptionBase)
            setDueDate(new Date())
        }
    }, [updatedItem])

    const postData = () => {
        if (updatedItem) {
            axios.put(`${APIHost}/todoData/${updatedItem.id}`, {
                addNewTaskTitle,
                taskDescription,
                dueDate,
            });
        } else {
            axios.post(`${APIHost}/todoData`, {
                addNewTaskTitle,
                taskDescription,
                dueDate,
            });
        }
    };

    return (
        <div className="modal">
            <Modal show={showModal} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {updatedItem() ? "Update task" : "Add New Task"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="example.ControlInput1">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Add what's important to do"
                                autoFocus
                                onChange={(e) => setAddNewTaskTitle(e.target.value)}
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
                                onChange={(e) => setTaskDescription(e.target.value)}
                                value={taskDescription}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button
                        variant="outline-success"
                        onClick={() => {
                            postData();
                            onClose();
                        }}
                        type="submit"
                    >
                        {updatedItem() ? "Update Task" : "Save Changes"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalForm;
