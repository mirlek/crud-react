import { useState } from 'react';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import './style/App.css';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <Router>
      <div className="App">
        <div className='todo-menu'>
            <p>
              To-DO List
            </p>
            <Button className="button-add-tasks" onClick={handleShow} >
      Add New Task
        <FontAwesomeIcon icon="fa-solid fa-plus" className="plus-solid" />
      </Button>
            <Routes>
            <Route path='modal' component={<Create />} />
            <Route exact path='/read' component={<Read />} />
            <Route exact path='/update' component={<Update />} />
            </Routes>
            
          </div>
          
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          
      </div>
    </Router>
  );
}

export default App;
