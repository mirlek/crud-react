import "../style/App.css";
import ModalForm from "./ModalForm";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function ToDo({ data, setData, onDelete }) {
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
            <ModalForm />;
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-pen" className="pen-solid" />
        </Button>
        <Button
          variant="outline-secondary"
          className="button-delete"
          onClick={() => {
            onDelete(data.id);
          }}
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
}

export default ToDo;
