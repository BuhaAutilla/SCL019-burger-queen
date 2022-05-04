import { orderBy } from 'firebase/firestore';
import React from 'react';

function Wall({ pedido }) {
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
                            <p> Estado: {item.status} </p>
                        </div>  
                    </div>      
                ))
                }
            </div>

        </div>
    );
}

export default Wall;