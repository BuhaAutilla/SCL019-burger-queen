import React, {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Col, Row } from "reactstrap";
import logo from '../burger_Queen Logo.svg';
import '../App.css';
import TodoMenu from "../data/menu.js";
import Order from './Order';
import { guardarPedido, wallCocina } from '../data/compilacion';
import Client from './Client';
import Waiter from './Waiter';
import Wall from './Wall';

const Menu = () => {
  const [order, setOrder] = useState([]);
  const [client, setClient] = useState('');
  const [waiter, setWaiter] = useState('');
  const [pedidos, setPedidos] = useState([]);
  const handleOnClick = (name, value) => {
    setOrder([...order, {name, value}]);
  }
  const enviarPedido = () => {
    guardarPedido(order, client, waiter);
    setOrder([]);
    alert('Pedido enviado');
  }

  // const handleOrders = (wall) => {
  //   wallCocina();
  // }

  const onLimpiar = () => {
    setOrder([]);
  };

  useEffect (() => {
    async function fetchPedidos() {
      const response = await wallCocina();
      setPedidos(response);
      console.log(response);
      }
    fetchPedidos();
  }, []);

  return (
    <div className="main-container">
      <Row>
        <Col>
        <div>
          {/* <header className="App-inner"> */}
          <img src={logo} className="App-inner-logo" alt="logo" />
          {/* </header> */}
        </div>
        </Col>
        <Col>
          <Tabs>
            <TabList>
              <Tab>Desayuno</Tab>
              <Tab>Almuerzo</Tab>
            </TabList>

            <TabPanel>
              <div>
                <div className="menuContainer">
                  <div className="multiple-menu-cont">
                    <div className="line"></div>
                    {TodoMenu.Desayuno.Cafe.map(btn => (
                      <button
                        key={btn.name}
                        onClick={() => handleOnClick(btn.name, btn.value)}
                        className="main-button">
                        <img src={btn.img} alt="icon"></img>
                        <div>
                          <p>{btn.name}</p>
                        </div>
                        <div>
                          <p className="item-price">${btn.value}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div>
                    <div className="line"></div>
                    {TodoMenu.Desayuno.Sandwich.map(btn => (
                      <button
                        key={btn.name}
                        onClick={() => handleOnClick(btn.name, btn.value)}
                        className="main-button">
                        <img src={btn.img} alt="icon"></img>
                        <div>
                          <p>{btn.name}</p>
                        </div>
                        <div>
                          <p className="item-price">${btn.value}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div>
                    <div className="line"></div>
                    {TodoMenu.Desayuno.Juice.map(btn => (
                      <button
                        key={btn.name}
                        onClick={() => handleOnClick(btn.name, btn.value)}
                        className="main-button">
                        <img src={btn.img} alt="icon"></img>
                        <div>
                          <p>{btn.name}</p>
                        </div>
                        <div>
                          <p className="item-price">${btn.value}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <div className="menuContainer">
                  <div>
                    {/* <div className="line"></div> */}
                    {TodoMenu.Almuerzo.Water.map(btn => (
                      <button
                        key={btn.name}
                        onClick={() => handleOnClick(btn.name, btn.value)}
                        className="main-button">
                        <img src={btn.img} alt="icon"></img>
                        <div>
                          <p>{btn.name}</p>
                        </div>
                        <div>
                          <p className="item-price">${btn.value}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div>
                    {/* <div className="line"></div> */}
                    {TodoMenu.Almuerzo.Soda.map(btn => (
                      <button
                        key={btn.name}
                        onClick={() => handleOnClick(btn.name, btn.value)}
                        className="main-button">
                        <img src={btn.img} alt="icon"></img>
                        <div>
                          <p>{btn.name}</p>
                        </div>
                        <div>
                          <p className="item-price">${btn.value}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div>
                    {/* <div className="line"></div> */}
                    {TodoMenu.Almuerzo.Simple_Burger.map(btn => (
                      <button
                        key={btn.name}
                        onClick={() => handleOnClick(btn.name, btn.value)}
                        className="main-button">
                        <img src={btn.img} alt="icon"></img>
                        <div>
                          <p>{btn.name}</p>
                        </div>
                        <div>
                          <p className="item-price">${btn.value}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div>
                    {/* <div className="line"></div> */}
                    {TodoMenu.Almuerzo.Doble_Burger.map(btn => (
                      <button
                        key={btn.name}
                        onClick={() => handleOnClick(btn.name, btn.value)}
                        className="main-button">
                        <img src={btn.img} alt="icon"></img>
                        <div>
                          <p>{btn.name}</p>
                        </div>
                        <div>
                          <p className="item-price">${btn.value}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div>
                    {/* <div className="line"></div> */}
                    {TodoMenu.Almuerzo.Extras.map(btn => (
                      <button
                        key={btn.name}
                        onClick={() => handleOnClick(btn.name, btn.value)}
                        className="main-button">
                        <img src={btn.img} alt="icon"></img>
                        <div>
                          <p>{btn.name}</p>
                        </div>
                        <div>
                          <p className="item-price">${btn.value}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </Col>
        <Col>
        <Tabs>
            <TabList>
              <Tab>Pedido</Tab>
              <Tab>Estado</Tab>
            </TabList>

            <TabPanel>
            <div>
                <div className="menuContainer">
                  <div className="orderContainer">
                  <Client setClient={setClient}/>
                  <Waiter setWaiter={setWaiter}/>
                    <Order order={order} />
                    <div className="rowButtons">
                    <div>
                      <button onClick={() => enviarPedido()} className="enviar-button">Enviar Pedido</button>
                    </div>
                    <div>
                      <button onClick={() => onLimpiar()} className="limpiar-button">Limpiar</button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <Wall pedido={pedidos} />
            </TabPanel>
        </Tabs>  
        </Col>
      </Row>
    </div>
  );
}

export default Menu;