import "../style/App.css";

const  PageLayout = ({children}) => {
  return (
    <div className="todo-menu">
      <p>To-DO List</p>
        {children}
    </div>
  );
}

export default PageLayout;
