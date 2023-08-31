import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import AddTaskButton from './components/addTaskButton';
import './style/App.css';
import { Route, Routes, useLocation} from 'react-router-dom';


function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
      <div className="App">
        <div className='todo-menu'>
            <p>
              To-DO List
            </p>
            
            <Routes location={background || location}>
            <Route path="/" element={<AddTaskButton />}>
          <Route path="modal" element={<Create />} />
        </Route>
            <Route exact path='/read' component={<Read />} />
            <Route exact path='/update' component={<Update />} />
            </Routes>
            {background && (
        <Routes>
          <Route path="modal" element={<Create />} />
        </Routes>
      )}
          </div>
          
      </div>
  );
}

export default App;
