import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import "../style/App.css";

library.add(fas);

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const AddButton = ({ onClick }: Props) => (
  <div className={"add-btn"}>
    <div>
      <Button onClick={onClick} className={"button-add-tasks"}>
        Add New Task
        <FontAwesomeIcon icon={faPlus as IconProp} className={"plus-solid"} />
      </Button>
    </div>
  </div>
);

export default AddButton;
