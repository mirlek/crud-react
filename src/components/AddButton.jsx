import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import {Button} from "react-bootstrap";
import "../style/App.css";

library.add(fas);

const AddButton = ({onClick}) =>  (
    <div className="add-btn">
      <div>
        <Button className="button-add-tasks" onClick={onClick}>
          Add New Task
          <FontAwesomeIcon icon="fa-solid fa-plus" className="plus-solid" />
        </Button>
      </div>
    </div>
  );


export default AddButton;
