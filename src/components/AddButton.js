import "../style/App.css";
import ModalForm from "./ModalForm";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function AddButton() {
  const handleClick = () => {
    <ModalForm />;
  };

  return (
    <div className="add-btn">
      <div>
        <Button className="button-add-tasks" onClick={handleClick()}>
          Add New Task
          <FontAwesomeIcon icon="fa-solid fa-plus" className="plus-solid" />
          <ModalForm />
        </Button>
      </div>
    </div>
  );
}

export default AddButton;
