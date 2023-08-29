import './style/App.css';

import edit from './style/pen-solid.svg';
import trash from './style/trash-solid.svg';
import Example from './toDoStuff/toDoModal.js';


function App() {
  return (
    <div className="App">
        <div className='todo-menu'>
          <p>
            To-DO List
          </p>
          <Example />
          <div className='toDoListCard'>
            <p>
              hello!
            </p>
            <div className='change-buttons'>
              <button className='button-edit'>
                  <img src={edit} className="pen-solid" alt="pen-solid" />
              </button>
              <button className='button-delete'>        
                  <img src={trash} className="trash-solid" alt="trash-solid" />
              </button>
            </div>
          </div>
          
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
  );
}

export default App;
