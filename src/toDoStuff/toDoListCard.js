
// import { Link } from "react-router-dom";
// import { Card, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fas);


//   return (
//     <div className="cardsStock">
//       <Card>
//         <Card.Body>
//           {APIData.map((data) => {
//             return (
//               <div className="toDoListCard">
//                 <Card.Title>{data.addNewTaskTitle}</Card.Title>
//                 <Card.Text>{data.dueDate}</Card.Text>
//                 <Card.Text>{data.taskDescription}</Card.Text>
//                 <div className="change-buttons">
//                   <Link to="/">
//                     <Button
//                       variant="outline-success"
//                       className="button-edit"
//                       onClick={() => setData(data)}
//                     >
//                       <FontAwesomeIcon
//                         icon="fa-solid fa-pen"
//                         className="pen-solid"
//                       />
//                     </Button>
//                   </Link>
//                   <Button
//                     variant="outline-secondary"
//                     className="button-delete"
//                     onClick={() => onDelete(data.id)}
//                   >
//                     <FontAwesomeIcon
//                       icon="fa-solid fa-trash"
//                       className="trash-solid"
//                       alt="trash-solid"
//                     />
//                   </Button>
//                 </div>
//               </div>
//             );
//           })}
//         </Card.Body>
//       </Card>
//     </div>
//   );
