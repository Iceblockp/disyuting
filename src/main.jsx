import App from "./App";
import "./index.css";
import ReactDOM from "react-dom/client";
import "../node_modules/flowbite/dist/flowbite";
import { BrowserRouter } from "react-router-dom"; 
// import CountUp from 'react-countup';

const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);

root.render(<BrowserRouter>
<App /></BrowserRouter>);
