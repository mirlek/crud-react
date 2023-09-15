import "../style/App.css";
import { APIHost } from "../appConfig";
import ModalForm from "./ModalForm";
import ToDo from "./ToDo";
import { useState, useEffect, SetStateAction } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

interface ToDoListParams {
  refresh: boolean,
  setRefresh: (refresh:boolean) => void,
  showModal?: boolean,
  setShowModal: (showModal:boolean) => void
}

const ToDoList = ({ refresh, setRefresh, showModal, setShowModal }: ToDoListParams) => {
  const [todoList, setTodoList] = useState<any[]>([]);

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

  const onDelete = (id: string) => {
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

  const [updatedItem, setUpdatedItem] = useState<any>('');
  const update = (item: SetStateAction<any>) => {
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
        } } onClick={function (): void {
          throw new Error("Function not implemented.");
        } }      />
    </div>
  );
};

export default ToDoList;
