import "../style/App.css";
import ToDo from "./ToDo";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

function ToDoList() {
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
    <div className="cardsStock">
      <Card>
        <Card.Body>
          {APIData.map((data) => {
            return <ToDo data={data} setData={setData} onDelete={onDelete} />;
          })}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ToDoList;
