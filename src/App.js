// import logo from './burger_Queen Logo.svg'
import './App.css';
import Menu from './features/Menu';
import Kitchen from './features/Kitchen';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" index element={<Layout />}> </Route>
        <Route path="menu" element={<Menu />} />
        <Route path="kitchen" element={<Kitchen />} />
      </Routes>
)}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
