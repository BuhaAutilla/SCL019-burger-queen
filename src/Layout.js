import logo from './burger_Queen Logo.svg';
import garson from './images/Garson.svg';
import chef from './images/Chef.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

function Layout() {
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Col>
          <Link to={"/menu"}>
            <div className="menu-icons-home">
              <img src={garson} className="icons-home" alt="garson" />
            </div>
          </Link>
        </Col>
        <Col>
          <Link to={"/kitchen"}>
            <div className="menu-icons-home">
              <img src={chef} className="icons-home" alt="chef" />
            </div>
          </Link>
        </Col>
         {/* <Col></Col> */}
         <Col></Col>
        </div>
      );
    }

    export default Layout;
