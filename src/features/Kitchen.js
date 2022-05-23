import logo from '../burger_Queen Logo.svg';
import Wall from './Wall';
import { useState, useEffect } from 'react';
import { getPedido, changeStatus } from '../data/compilacion';
import React from 'react';
import { wallCocina } from '../data/compilacion';
import '../App.css';

function Kitchen() {
  // const [pedido, setPedido] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  useEffect (() => {
    async function fetchPedidos() {
      const response = await wallCocina();
      setPedidos(response);
      }
    fetchPedidos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Wall pedido={pedidos} />
      </header>
    </div>
  )}
  

export default Kitchen;