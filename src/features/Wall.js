import { orderBy } from 'firebase/firestore';
import React from 'react';
import { useState, useEffect } from 'react';
import { getPedido, changeStatus } from '../data/compilacion';

function Wall({ pedido }) {


    async function marcarListo(pedidoId) {
        let orderState = await changeStatus(pedidoId);
        console.log(orderState);
    }

    return (
        <div className='menuContainer'>
            <div className="multiple-menu-cont">
                {pedido.map(item => (
                    <div key={item.id}>
                        <div className='pedido-container'>
                            <p> Cliente: {item.client} </p>
                            <p> Meserx: {item.waiter}</p>
                            <div className='main-button'> {item.order.map(el => (
                                <div key={el.name}>
                                    <p> {el.name} </p>
                                    <p> {el.value} </p>
                                </div>
                            ))}</div>
                            <p> Total: {item.total} </p>
                            <p>Estado: {item.status}</p>
                            <div className="template-order">
                                <button className='listo-btn'
                                    // style={{ backgroundColor: item.status === 'Listo' ? 'green' : 'grey' }}
                                    onClick={() => marcarListo(item.id)}>
                                    {item.status}
                                </button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>

        </div>
    );
}

export default Wall;