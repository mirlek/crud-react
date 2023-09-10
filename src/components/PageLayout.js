import "../style/App.css";
import ToDoList from "./ToDoList";
import AddButton from "./AddButton";

function PageLayout() {
  return (
    <div className="todo-menu">
      <p>To-DO List</p>
      <AddButton />
      <ToDoList />
    </div>
  );
}

export default PageLayout;
