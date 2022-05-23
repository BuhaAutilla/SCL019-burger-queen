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
        <Col className='homeOptions'>
          <Link to={"/menu"}>
            <div className="menu-icons-home">
              <img src={garson} className="icons-home" alt="garson" />
            </div>
          </Link>
        </Col>
        <Col className='homeOptions'>
          <Link to={"/kitchen"} refresh="true">
            <div className="menu-icons-home">
              <img src={chef} className="icons-home" alt="chef" />
            </div>
          </Link>
        </Col>
         <Col className='homeOptions'></Col>
      </div>
      );
    }

    export default Layout;
