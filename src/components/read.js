import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card,  Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Read() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://64ef1ed7219b3e2873c3f9ad.mockapi.io/todoData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const setData = (data) => {
        console.log(data);
        let { id, addNewTaskTitle, taskDescription, dueDate } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Your Task', addNewTaskTitle);
        localStorage.setItem('Due Date', dueDate);
        localStorage.setItem('To-Do', taskDescription);       
    }

    const onDelete = (id) => {
        axios.delete(`https://64ef1ed7219b3e2873c3f9ad.mockapi.io/todoData/${id}`)
     .then(() => {
        getData();
    })
    }
    const getData = () => {
        axios.get(`https://64ef1ed7219b3e2873c3f9ad.mockapi.io/todoData`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
    return (
    <div className='cardsStock'>
        <Card>
            <Card.Body>
            {APIData.map((data) => {
        return (
            <div className='toDoListCard'>
                <Card.Title>{data.addNewTaskTitle}</Card.Title>
                <Card.Text >{data.dueDate}</Card.Text>
                <Card.Text>{data.taskDescription}</Card.Text>
                <div className='change-buttons'>
                    <Link to='/update'>
                        <Button variant="outline-success" className='button-edit' onClick={() => setData(data)}>
                            <FontAwesomeIcon icon="fa-solid fa-pen" className="pen-solid" />
                        </Button>
                    </Link>     
                    <Button variant="outline-secondary" className='button-delete' onClick={() => onDelete(data.id)}>
                        <FontAwesomeIcon icon="fa-solid fa-trash" className="trash-solid" alt="trash-solid" />   
                    </Button>
                </div>     
            </div>
    )})}
                
            </Card.Body>
        </Card>
    </div>
            
          
    )
}

export default Read;