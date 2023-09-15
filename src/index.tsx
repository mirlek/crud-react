import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import React from "react";

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export default root;
