import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

    return (
          
//             <div className='toDoListCard'>
//               <p>
//                 hello!
//               </p>
//               <div className='change-buttons'>
//                 <Button className='button-edit'>
//                     <FontAwesomeIcon icon="fa-solid fa-pen" className="pen-solid" />
    
//                 </Button>
//                 <Button className='button-delete'>    
//  <FontAwesomeIcon icon="fa-solid fa-trash" className="trash-solid" />     
    
//                 </Button>
//               </div>
//             </div>

<div className='cardsStock'>
    <Card>
        <Card.Body>
        {APIData.map((data) => {
     return (
        <div className='toDoListCard'>
            <Card.Title>{data.addNewTaskTitle}</Card.Title>
            <Card.Text>{data.taskDescription}</Card.Text>
            <div className='change-buttons'>
            <Button variant="primary" className='button-edit'>
                <FontAwesomeIcon icon="fa-solid fa-pen" className="pen-solid" />
            </Button>
            
            <Button variant="primary" className='button-delete'>
                <FontAwesomeIcon icon="fa-solid fa-trash" className="trash-solid" alt="trash-solid" />   
            </Button>
            </div>
        </div>
   )})}
            
        </Card.Body>
    </Card>
</div>
            
          
    )
    
    // <Card style={{ width: '18rem' }}>
    // <Card>
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
        
    //     <Button variant="primary">
    //                     <FontAwesomeIcon icon="fa-solid fa-pen" className="pen-solid" />

    // </Button>
        
    //     <Button variant="primary">
    // <FontAwesomeIcon icon="fa-solid fa-trash" className="trash-solid" alt="trash-solid" />   
    // </Button>

    //   </Card.Body>
    // </Card>
}

export default Read;