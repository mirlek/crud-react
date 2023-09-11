import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "../style/App.css";
import { IconButton } from "./IconButton";

library.add(fas);

const ToDo = ({ data, update, onDelete }) => (
  <div className="toDoListCard">
    <Card.Title>{data.addNewTaskTitle}</Card.Title>
    <Card.Text>{data.dueDate}</Card.Text>
    <Card.Text>{data.taskDescription}</Card.Text>
    <div className="change-buttons">
      <IconButton
        icon={<FontAwesomeIcon icon="fa-solid fa-pen" className="pen-solid" />}
        onClick={update}
      />
      <IconButton
        icon={
          <FontAwesomeIcon
            icon="fa-solid fa-trash"
            className="trash-solid"
            alt="trash-solid"
          />
        }
        onClick={() => {
          onDelete(data.id);
        }}
      />
    </div>
  </div>
);

export default ToDo;
