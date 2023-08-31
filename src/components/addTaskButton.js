import { Link, useLocation, Outlet } from "react-router-dom";
import { React, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "react-bootstrap";



const AddTaskButton = () => {
  const location = useLocation();

  const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

  return (
    <div >
      <Link to="modal" state={{ background: location }} >
        <Button className="button-add-tasks" onClick={handleShow} show={show}>
            Add New Task
              <FontAwesomeIcon icon="fa-solid fa-plus" className="plus-solid" />
            </Button>
      </Link>
      <Outlet />
    </div>
  );
};

export default AddTaskButton;

