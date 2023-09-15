import "../style/App.css";
import { PropsWithChildren } from 'react';


const PageLayout = (props: PropsWithChildren) => {
  return (
    <div className="todo-menu">
      <p>To-DO List</p>
      {props.children}
    </div>
  );
};

export default PageLayout;
