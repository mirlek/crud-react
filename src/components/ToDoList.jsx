import "../style/App.css";
import { APIHost } from "../appConfig";
import ModalForm from "./ModalForm";
import ToDo from "./ToDo";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

const ToDoList = ({ refresh, setRefresh, showModal, setShowModal }) => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (refresh) {
      axios
        .get(`${APIHost}/todoData`)
        .then((response) => {
          setTodoList(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

      setRefresh(false);
    }
  }, [refresh, setRefresh]);

  const onDelete = (id) => {
    axios
      .delete(`${APIHost}/todoData/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => console.error(error));
  };
  const getData = () => {
    axios
      .get(`${APIHost}/todoData`)
      .then((getData) => {
        setTodoList(getData.data);
      })
      .catch((error) => console.error(error));
  };

  const [updatedItem, setUpdatedItem] = useState();
  const update = (item) => {
    setShowModal(true);
    setUpdatedItem(item);
  };

  return (
    <div className="cardsStock">
      <Card>
        <Card.Body>
          {todoList.map((data) => (
            <ToDo
              key={data.id}
              update={() => update(data)}
              data={data}
              onDelete={onDelete}
            />
          ))}
        </Card.Body>
      </Card>
      <ModalForm
        showModal={showModal}
        updatedItem={updatedItem}
        onClose={() => {
          setShowModal(false);
          setRefresh(true);
          setUpdatedItem(undefined);
        }}
      />
    </div>
  );
};

export default ToDoList;
